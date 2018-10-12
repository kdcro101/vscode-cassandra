import { AnimationEvent } from "@angular/animations";
import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef,
    EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChild, ViewChildren,
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatSnackBar } from "@angular/material";
import { from, merge, ReplaySubject, Subject } from "rxjs";
import { fromEvent } from "rxjs";
import { concatMap, debounceTime, map, take, takeUntil } from "rxjs/operators";
import * as Split from "split.js";
import { WorkbenchCqlStatement } from "../../../../../../src/types/editor";
import { CassandraCluster, CassandraClusterData, CassandraKeyspace, ExecuteQueryResponse } from "../../../../../../src/types/index";
import { CqlAnalysisError } from "../../../../../../src/types/parser";
import { ViewDestroyable } from "../../../base/view-destroyable/index";
import { UiDialogChangesCancelComponent } from "../../../dialogs";
import { AutocompleteService } from "../../../services/autocomplete/autocomplete.service";
import { ClusterService } from "../../../services/cluster/cluster.service";
import { CqlClientService } from "../../../services/cql-client/cql-client.service";
import { EditorService } from "../../../services/editor/editor.service";
import { ThemeService } from "../../../services/theme/theme.service";
import { WorkspaceService } from "../../../services/workspace/workspace.service";
import { WorkbenchEditor } from "../../../types/index";
import { UiDataGridComponent } from "../../ui-data-grid/ui-data-grid/ui-data-grid.component";
import { UiMonacoEditorComponent } from "../../ui-monaco-editor/ui-monaco-editor/ui-monaco-editor.component";
import { panelAnimations } from "./animations/panel";

declare var splitPosition: number;

type PanelAnimationState = "active" | "hidden";
type GutterAction = "minimize" | "maximize" | "center";

export interface StatementChangeEvent {
    statement: WorkbenchCqlStatement;
    isCodeModified: boolean;
}
@Component({
    selector: "ui-query",
    templateUrl: "./ui-query.component.html",
    styleUrls: ["./ui-query.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        ...panelAnimations,
    ],
})
export class UiQueryComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @Output("onStatementChange") public onStatementChange = new EventEmitter<StatementChangeEvent>();
    @Output("onStatementSave") public onStatementSave = new EventEmitter<void>();

    @ViewChild("top") public top: ElementRef<HTMLDivElement>;
    @ViewChild("bottom") public bottom: ElementRef<HTMLDivElement>;
    @ViewChild("monacoEditor") public monacoEditor: UiMonacoEditorComponent;
    @ViewChild("root") public root: ElementRef<HTMLDivElement>;

    @ViewChildren("dataGrid") public dataGrid: QueryList<UiDataGridComponent>;

    public clusterLast: string = null;
    public clusterLoading: boolean = false;
    public clusterLoadingError: boolean = false;

    public clusterData: CassandraClusterData = null;
    public clusterList: CassandraCluster[] = [];
    public keyspaceList: CassandraKeyspace[] = [];

    public editors: WorkbenchEditor[] = [];
    public editorCurrent: WorkbenchEditor = null;
    public editorIndex: number = -1;

    public fontSize: number = 15;
    public lineHeight: number = 23;

    private stateReady = new ReplaySubject<void>();
    private eventCodeChange = new Subject<WorkbenchCqlStatement>();
    private eventEditorChange = new Subject<void>();

    public columnDefs: any[];
    public rowData: any[];

    private decorations: string[] = [];
    private decorationsTimeout: any;

    public panelAnimationState: { [id: string]: PanelAnimationState };

    public formGroup: FormGroup;

    private splitInstance: Split.Instance;
    private gutterElement: HTMLDivElement;
    private gutterSize = 12;

    constructor(
        public change: ChangeDetectorRef,
        public cluster: ClusterService,
        public autocomplete: AutocompleteService,
        public cqlClient: CqlClientService,
        public theme: ThemeService,
        public snackBar: MatSnackBar,
        public editorService: EditorService,
        public workspace: WorkspaceService,
        public dialog: MatDialog,
        public fb: FormBuilder,
    ) {
        super(change);

        this.clusterList = this.cluster.list;
        this.fontSize = Math.round(theme.getEditorFontSize() * 1.2);
        this.lineHeight = Math.round(this.fontSize * 1.5);

        this.formGroup = this.fb.group({
            clusterName: new FormControl(null, [
                Validators.required,
            ]),
            keyspace: new FormControl(null, []),

        });

    }
    public trackEditor(index: number, e: WorkbenchEditor) {
        // console.log(`trackEditor ${e.id}`);
        return e.id;
    }
    public panelAnimationStart = (event: AnimationEvent, index: number) => {
        // console.log(`[${index}] panelAnimationStart ${event.fromState} -> ${event.toState}`);
        const e = this.dataGrid.toArray()[index];
        if (event.toState === "hidden" && e != null) {
            // e.scrollDisable();
        }
    }
    public panelAnimationDone = (event: AnimationEvent, index: number) => {
        // console.log(`[${index}] panelAnimationDone ${event.fromState} -> ${event.toState}`);
        const e = this.dataGrid.toArray()[index];
        if (event.toState === "active" && e != null) {
            setTimeout(() => e.scrollEnable());
        }
    }
    public get editor() {
        return this.editorCurrent;
    }
    @Input("editor") public set editor(editor: WorkbenchEditor) {
        this.stateReady.pipe(
            take(1),
        ).subscribe(() => {
            // disable scroll on previous grid
            if (this.editor && editor.id !== this.editor.id) {
                const e = this.dataGrid.toArray()[this.editorIndex];
                if (e) {
                    console.log("disabling scroll");
                    e.scrollDisable();
                }
            }

            console.log("+++++++++++++++++++++++++++++++++++++");
            console.log("Input Editor");
            console.log("+++++++++++++++++++++++++++++++++++++");

            this.editorCurrent = editor;
            this.editors = this.editorService.list;
            this.editorIndex = this.editors.findIndex((e) => e.id === this.editor.id);

            this.eventEditorChange.next();

            if (this.editorCurrent.statement.clusterName !== this.clusterLast) {
                this.prepareCluster(this.editorCurrent.statement.clusterName);
            }
            this.activateEditorPanel(editor);
            this.detectChanges();

            this.editorCurrent.stateExecuting.pipe(
                takeUntil(this.eventEditorChange),
            ).subscribe((state) => {
                const c = this.formGroup.controls["clusterName"];
                const k = this.formGroup.controls["keyspace"];
                if (state) {
                    c.disable();
                    k.disable();
                } else {
                    c.enable();
                    k.enable();
                }
            });

            merge(this.editorService.eventListChange, this.editorService.stateActive).pipe(
                takeUntil(merge(this.eventViewDestroyed, this.eventEditorChange)),
            ).subscribe(() => {
                console.log("+++++++++++++++++++++++++++++++++++++");
                console.log("editorService change");
                console.log("+++++++++++++++++++++++++++++++++++++");

                if (this.editor == null) {
                    console.log("---> EDITOR IS NULL");
                    return;
                }

                this.editors = this.editorService.list;
                this.editorIndex = this.editors.findIndex((e) => e.id === this.editor.id);

                this.activateEditorPanel(this.editor);
                this.detectChanges();
            });
        });

    }
    ngOnInit() {

        this.gutterElement = document.createElement("div");

        this.splitInstance = Split([this.top.nativeElement, this.bottom.nativeElement], {
            direction: "vertical",
            sizes: [splitPosition, 100 - splitPosition],
            minSize: [200, 72],
            gutterSize: this.gutterSize,
            gutter: (index: number, direction: "horizontal" | "vertical") => {
                this.gutterElement.className = `gutter gutter-${direction}`;
                return this.gutterElement;
            },
            onDragEnd: () => {
                const sizes = this.splitInstance.getSizes();
                const first = sizes[0];
                console.log(`[split.js] new size = ${first}`);
                this.workspace.setSplitSize(first)
                    .then(() => { }).catch((e) => {
                        console.log(e);
                    });
            },
        });

        this.cluster.eventChange.pipe()
            .subscribe(() => {
                this.clusterList = this.cluster.list;
                this.detectChanges();
            });

        this.stateReady.next();

        this.eventCodeChange.pipe(
            takeUntil(this.eventViewDestroyed),
            debounceTime(500),
        ).subscribe((statement) => {
            this.onStatementChange.emit({
                statement,
                isCodeModified: true,
            });
        });

        // this.cqlClient.stateExecuting.pipe(
        //     takeUntil(this.eventViewDestroyed),
        // ).subscribe(() => this.detectChanges());

        const gutterButtonMax = document.createElement("div");
        gutterButtonMax.className = "gutter-button maximize";
        gutterButtonMax.style.right = `0px`;
        this.gutterElement.appendChild(gutterButtonMax);

        const gutterButtonMin = document.createElement("div");
        gutterButtonMin.className = "gutter-button minimize";
        gutterButtonMin.style.right = `24px`;
        this.gutterElement.appendChild(gutterButtonMin);

        merge(
            fromEvent<MouseEvent>(gutterButtonMax, "mouseup").pipe(map<MouseEvent, [MouseEvent, GutterAction]>((e) => [e, "maximize"])),
            fromEvent<MouseEvent>(gutterButtonMin, "mouseup").pipe(map<MouseEvent, [MouseEvent, GutterAction]>((e) => [e, "minimize"])),
            fromEvent<MouseEvent>(this.gutterElement, "dblclick").pipe(map<MouseEvent, [MouseEvent, GutterAction]>((e) => [e, "center"])),
        ).pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((e) => {
            this.onGutterAction(e[0], e[1]);
        });

        merge(
            fromEvent<MouseEvent>(gutterButtonMax, "mousedown"),
            fromEvent<MouseEvent>(gutterButtonMin, "mousedown"),
        ).pipe(
            takeUntil(this.eventViewDestroyed),
        ).subscribe((e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
        });

    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public activateEditorPanel(editor: WorkbenchEditor) {
        // console.log(`panel Activating ${editor.id}`);
        const states = {};
        this.editorService.list.forEach((e) => {
            if (this.editorCurrent.id === e.id) {
                states[e.id] = "active";
                return;
            }
            states[e.id] = "hidden";
        });
        this.panelAnimationState = states;

    }

    public updateEditor(editor: WorkbenchEditor) {

    }

    public onCodeChange = (code: string) => {

        this.editorCurrent.statement.body = code;
        this.eventCodeChange.next(this.editorCurrent.statement);
    }
    public onClusterChange = (clusterName: string) => {
        console.log(`onClusterChange ${clusterName}`);
        this.editorCurrent.statement.clusterName = clusterName;

        this.onStatementChange.emit({
            statement: this.editorCurrent.statement,
            isCodeModified: false,
        });

        this.keyspaceList = [];
        this.detectChanges();
        this.prepareCluster(clusterName);

        if (this.monacoEditor) {
            this.monacoEditor.updateExecuteParams();
        }
    }
    public onKeyspaceChange = (keyspace: string) => {
        console.log(`onKeyspaceChange ${keyspace}`);
        this.editorCurrent.statement.keyspace = keyspace;

        this.onStatementChange.emit({
            statement: this.editorCurrent.statement,
            isCodeModified: false,
        });

        this.autocomplete.setKeyspace(keyspace);
        // this.editorService.keyspace = keyspace;
        this.workspace.setActiveKeyspace(this.editor.statement.clusterName, keyspace)
            .then((result) => {
                console.log("workspace.setActiveKeyspace OK");
            }).catch((e) => {
                console.log(e);
            });

        if (this.monacoEditor) {
            this.monacoEditor.updateExecuteParams();
        }
    }
    public executeCql = () => {
        return new Promise((resolve, reject) => {

            let p: Promise<boolean> = null;
            if (this.editor.dataChanges.length > 0) {
                p = this.showDialogChangesWarning();
            }

            Promise.all([
                p,
            ]).then((result) => {

                if (result[0] === false) {
                    return;
                }

                if (this.clusterLoading || this.clusterLoadingError) {
                    return;
                }

                this.editorCurrent.result = null;
                this.editorCurrent.dataChanges = [];
                this.detectChanges();

                this.cqlClient.executeEditor(this.editorCurrent)
                    .then((response: ExecuteQueryResponse) => {
                        console.log("[cqlClient.execute] Got result !!!");

                        if (response.error) {
                            this.processExecuteError(response);
                            return;
                        }

                        this.detectChanges();

                    }).catch((e) => {
                        this.snackBar.open(e, "OK", {
                            duration: 1000,
                        });
                    });

            }).catch((e) => {
                reject(e);
            });
        });
    }

    public processExecuteError(response: ExecuteQueryResponse) {
        let message: string = "";
        switch (response.error) {
            case CqlAnalysisError.SELECT_AND_ALTER:
                message = "Unable to execute SELECT statement along with data or structure altering statements";
                break;
            case CqlAnalysisError.MULTIPLE_SELECT:
                message = "Unable to execute multiple SELECT statements";
                break;
            default:
                message = `ERROR: ${JSON.stringify(response.error)}`;
                break;

        }

        this.snackBar.open(message, "OK", {
            duration: 10000,
        });
    }
    public onErrorClick = (ev: Event, index: number) => {

        if (this.decorationsTimeout) {
            clearTimeout(this.decorationsTimeout);
            this.decorationsTimeout = null;
        }

        const statement = this.editorCurrent.result.analysis.statements[index];
        const error = this.editorCurrent.result.errors.find((e) => e.statementIndex === index);
        const editor = this.monacoEditor.monacoEditor;
        const model = editor.getModel();

        const ps = model.getPositionAt(statement.charStart);
        const pe = model.getPositionAt(statement.charStop + 1);

        editor.revealPositionInCenter(ps, monaco.editor.ScrollType.Immediate);

        // model.getAllDecorations().forEach((e)=>e.)
        this.decorations = editor.deltaDecorations(this.decorations, [
            {
                range: monaco.Range.fromPositions(ps, pe), options: {
                    className: "highlight-error",
                    hoverMessage: {
                        value: error ? error.error.message : null,
                    },
                },
            },
        ]);

        this.decorationsTimeout = setTimeout(() => {
            this.decorations = editor.deltaDecorations(this.decorations, []);
        }, 1000);

    }
    private prepareCluster(clusterName: string) {

        this.clusterLoading = true;

        from(this.workspace.setActiveClusterName(clusterName)).pipe(
            concatMap(() => this.cluster.getStructure(clusterName)),
        ).pipe()
            .subscribe((data) => {
                this.clusterLast = clusterName;
                this.clusterData = data;
                this.keyspaceList = data.keyspaces;
                this.autocomplete.setCluster(clusterName, data);
                // this.editorService.clusterName = clusterName;

                this.clusterLoading = false;
                this.clusterLoadingError = false;
                this.detectChanges();
            }, (e) => {
                this.clusterLoading = false;
                this.clusterLoadingError = true;
                this.detectChanges();
            });

    }
    private showDialogChangesWarning(): Promise<boolean> {
        // true continue
        // false cancel
        return new Promise((resolve, reject) => {
            const dialogRef = this.dialog.open(UiDialogChangesCancelComponent, {
                width: "320px",
                data: false,
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log("The dialog was closed");
                const out = result === true ? true : false;
                resolve(out);
            }, (e) => {
                console.log(e);
                resolve(false);
            });
        });
    }
    private onGutterAction = (e: MouseEvent, action: GutterAction) => {

        // minSize: [200, 72],
        const rect = this.root.nativeElement.getBoundingClientRect();
        const pxPerPc = rect.height / 100;

        // console.log(JSON.stringify(this.splitInstance.getSizes()));

        let calculatedHeightPc: number = 0;
        switch (action) {
            case "minimize":
                calculatedHeightPc = Math.round(72 / pxPerPc);
                this.splitInstance.setSizes([100 - calculatedHeightPc, calculatedHeightPc]);
                this.workspace.setSplitSize(100 - calculatedHeightPc)
                    .then().catch((err) => {
                        console.log(err);
                    });
                break;
            case "maximize":
                calculatedHeightPc = Math.round(200 / pxPerPc);
                this.splitInstance.setSizes([calculatedHeightPc, 100 - calculatedHeightPc]);
                this.workspace.setSplitSize(calculatedHeightPc)
                    .then().catch((err) => {
                        console.log(err);
                    });
                break;

            case "center":
                this.splitInstance.setSizes([50, 50]);
                this.workspace.setSplitSize(50)
                    .then().catch((err) => {
                        console.log(err);
                    });
                break;

        }
    }

}
