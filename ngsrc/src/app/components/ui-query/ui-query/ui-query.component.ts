import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild,
} from "@angular/core";
import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import * as Split from "split.js";
import { WorkbenchCqlStatement, WorkbenchEditor } from "../../../../../../src/types/editor";
import { CassandraCluster } from "../../../../../../src/types/index";
import { ViewDestroyable } from "../../../base/view-destroyable/index";
import { ClusterService } from "../../../services/cluster/cluster.service";
import { ThemeService } from "../../../services/theme/theme.service";
import { UiMonacoEditorComponent } from "../../ui-monaco-editor/ui-monaco-editor/ui-monaco-editor.component";

@Component({
    selector: "ui-query",
    templateUrl: "./ui-query.component.html",
    styleUrls: ["./ui-query.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiQueryComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @ViewChild("top") public top: ElementRef<HTMLDivElement>;
    @ViewChild("bottom") public bottom: ElementRef<HTMLDivElement>;
    @ViewChild("monacoEditor") public monacoEditor: UiMonacoEditorComponent;

    @Output("onStatementChange") public onStatementChange = new EventEmitter<WorkbenchCqlStatement>();

    public clusterList: CassandraCluster[] = [];
    public editorCurrent: WorkbenchEditor = null;

    public fontSize: number = 15;
    public lineHeight: number = 23;

    private stateReady = new ReplaySubject<void>();

    constructor(
        public change: ChangeDetectorRef,
        public cluster: ClusterService,

        public theme: ThemeService,
    ) {
        super(change);

        this.clusterList = this.cluster.list;
        this.fontSize = Math.round(theme.getEditorFontSize() * 1.2);
        this.lineHeight = Math.round(this.fontSize * 1.5);

    }
    @Input() public set editor(e: WorkbenchEditor) {
        this.stateReady.pipe(
            take(1),
        ).subscribe(() => {

            console.log("set EDITOR");

            this.editorCurrent = e;
            this.detectChanges();

            this.monacoEditor.setCode(this.editorCurrent.statement.body);

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

    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public updateEditor(editor: WorkbenchEditor) {

    }

    public onCodeChange = (code: string) => {

        const s = this.editorCurrent.statement;
        s.body = code;

        this.onStatementChange.emit(s);
    }

}
