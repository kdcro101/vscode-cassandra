import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChild, ViewChildren,
} from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ReplaySubject } from "rxjs";
import { Subject } from "rxjs";
import { debounceTime, take, takeUntil } from "rxjs/operators";
import * as Split from "split.js";
import { QueryExecuteResult } from "../../../../../../src/cassandra-client";
import { ClusterExecuteResults } from "../../../../../../src/clusters";
import { WorkbenchCqlStatement } from "../../../../../../src/types/editor";
import { CassandraCluster, ExecuteQueryResponse } from "../../../../../../src/types/index";
import { ViewDestroyable } from "../../../base/view-destroyable/index";
import { TableColumnResize } from "../../../const/table-column-resize";
import { ClusterService } from "../../../services/cluster/cluster.service";
import { CqlClientService } from "../../../services/cql-client/cql-client.service";
import { ThemeService } from "../../../services/theme/theme.service";
import { WorkbenchEditor } from "../../../types/index";
import { UiMonacoEditorComponent } from "../../ui-monaco-editor/ui-monaco-editor/ui-monaco-editor.component";

@Component({
    selector: "ui-query",
    templateUrl: "./ui-query.component.html",
    styleUrls: ["./ui-query.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiQueryComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @Output("onStatementChange") public onStatementChange = new EventEmitter<WorkbenchCqlStatement>();

    @ViewChild("top") public top: ElementRef<HTMLDivElement>;
    @ViewChild("bottom") public bottom: ElementRef<HTMLDivElement>;
    @ViewChild("monacoEditor") public monacoEditor: UiMonacoEditorComponent;
    @ViewChild("grid") public grid: ElementRef<HTMLTableElement>;

    public clusterList: CassandraCluster[] = [];
    public editorCurrent: WorkbenchEditor = null;
    public showGrid: boolean = false;

    public fontSize: number = 15;
    public lineHeight: number = 23;

    private stateReady = new ReplaySubject<void>();
    private eventCodeChange = new Subject<WorkbenchCqlStatement>();

    private tableColumnResize: TableColumnResize;

    public columnDefs: any[];
    public rowData: any[];

    constructor(
        public change: ChangeDetectorRef,
        public cluster: ClusterService,
        private cqlClient: CqlClientService,
        public theme: ThemeService,
        public snackBar: MatSnackBar,
    ) {
        super(change);

        this.clusterList = this.cluster.list;
        this.fontSize = Math.round(theme.getEditorFontSize() * 1.2);
        this.lineHeight = Math.round(this.fontSize * 1.5);

        this.columnDefs = [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" },
        ];

        this.rowData = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 },
        ];

    }
    @Input() public set editor(e: WorkbenchEditor) {
        this.stateReady.pipe(
            take(1),
        ).subscribe(() => {

            console.log("set EDITOR");

            this.editorCurrent = e;
            this.detectChanges();

            // this.monacoEditor.setCode(this.editorCurrent.statement.body);

        });
    }
    ngOnInit() {

        Split([this.top.nativeElement, this.bottom.nativeElement], {
            direction: "vertical",
            gutterSize: 12,
        });

        this.cluster.eventChange.pipe()
            .subscribe(() => {
                this.clusterList = this.cluster.list;
                this.detectChanges();
            });

        this.stateReady.next();

        this.eventCodeChange.pipe(
            takeUntil(this.eventViewDestroyed),
            debounceTime(1000),
        ).subscribe((d) => {
            this.onStatementChange.emit(d);
        });

    }
    ngOnDestroy() {
        super.ngOnDestroy();
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
        this.onStatementChange.emit(this.editorCurrent.statement);
    }
    public executeCql = () => {
        const cql = this.editorCurrent.statement.body;
        const clusterName = this.editorCurrent.statement.clusterName;

        this.cqlClient.execute(clusterName, cql).pipe()
            .subscribe((response: ExecuteQueryResponse) => {
                console.log("[cqlClient.execute] Got result !!!");

                if (response.error) {
                    this.processExecuteError(response);
                    return;
                }

                this.editorCurrent.result = response.result;
                this.showGrid = (response.result.analysis.selectData &&
                    !response.result.analysis.alterData &&
                    !response.result.analysis.alterStructure) ? true : false;

                this.detectChanges();
            }, (e) => {
                this.snackBar.open(e, "OK", {
                    duration: 1000,
                });
            });

    }

    public processExecuteError(response: ExecuteQueryResponse) {
            let message: string = "";
            switch (response.error) {
                case "select_only":
                message = "Unable to execute SELECT statement along with data or structure altering statements";
                break;
            }

        this.snackBar.open(message, "OK", {
            duration: 10000,
        });
    }

}
