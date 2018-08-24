import * as Split from "split.js";

import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy,
    OnInit, ViewChild,
} from "@angular/core";
import { WorkbenchEditor } from "../../../../../../src/types/editor";
import { CassandraCluster } from "../../../../../../src/types/index";
import { ViewDestroyable } from "../../../base/view-destroyable/index";
import { ClusterService } from "../../../services/cluster/cluster.service";
import { ThemeService } from "../../../services/theme/theme.service";

@Component({
    selector: "ui-query",
    templateUrl: "./ui-query.component.html",
    styleUrls: ["./ui-query.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiQueryComponent extends ViewDestroyable implements OnInit, OnDestroy {

    @ViewChild("top") public top: ElementRef<HTMLDivElement>;
    @ViewChild("bottom") public bottom: ElementRef<HTMLDivElement>;

    public clusterList: CassandraCluster[] = [];
    // tslint:disable-next-line:max-line-length
    // public code: string = "select * \n from tablica; tekst!!! <span contenteditable=\"false\" style=\"color:fuchsia;\">TEXT123</span> <span contenteditable=\"false\" style=\"color:lime;\"><span class=\"indicator\"></span><span>#ABC</span></span>\n\n";
    // tslint:disable-next-line:max-line-length
    // public code: string = "select * \n from tablica; tekst!!! <span style=\"color:fuchsia;\">TEXT123</span> <span style=\"color:lime;\"><span class=\"indicator\"></span><span>#ABC</span></span>\n\n";
    public code: string = "select aaaa,bbbb,cccc \n from tableName where ddd='21' and ccc=22;\n";

    constructor(
        public change: ChangeDetectorRef,
        public cluster: ClusterService,
        public theme: ThemeService,
    ) {
        super(change);

        this.clusterList = this.cluster.list;

    }

    ngOnInit() {

        Split([this.top.nativeElement, this.bottom.nativeElement], {
            direction: "vertical",
            gutterSize: 12,
        });

        // Split([this.topLeft.nativeElement, this.topRight.nativeElement], {
        //     sizes: [75, 25],
        //     gutterSize: 12,
        // });

        this.cluster.eventChange.pipe()
            .subscribe(() => {
                this.clusterList = this.cluster.list;
                this.detectChanges();
            });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public updateEditor(editor: WorkbenchEditor) {

    }

}
