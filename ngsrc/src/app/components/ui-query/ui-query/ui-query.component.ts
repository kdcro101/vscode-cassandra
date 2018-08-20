import * as Split from "split.js";

import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { WorkbenchEditor } from "../../../../../../src/types/editor";
import { ThemeService } from "../../../services/theme/theme.service";

@Component({
    selector: "ui-query",
    templateUrl: "./ui-query.component.html",
    styleUrls: ["./ui-query.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiQueryComponent implements OnInit {

    @ViewChild("top") public top: ElementRef<HTMLDivElement>;
    @ViewChild("bottom") public bottom: ElementRef<HTMLDivElement>;
    @ViewChild("topLeft") public topLeft: ElementRef<HTMLDivElement>;
    @ViewChild("topRight") public topRight: ElementRef<HTMLDivElement>;

    // tslint:disable-next-line:max-line-length
    // public code: string = "select * \n from tablica; tekst!!! <span contenteditable=\"false\" style=\"color:fuchsia;\">TEXT123</span> <span contenteditable=\"false\" style=\"color:lime;\"><span class=\"indicator\"></span><span>#ABC</span></span>\n\n";
    // tslint:disable-next-line:max-line-length
    // public code: string = "select * \n from tablica; tekst!!! <span style=\"color:fuchsia;\">TEXT123</span> <span style=\"color:lime;\"><span class=\"indicator\"></span><span>#ABC</span></span>\n\n";
    public code: string = "select aaaa,bbbb,cccc \n from tableName where ddd='21' and ccc=22;\n";

    constructor(public theme: ThemeService) {

    }

    ngOnInit() {

        Split([this.top.nativeElement, this.bottom.nativeElement], {
            direction: "vertical",
            gutterSize: 12,
        });

        Split([this.topLeft.nativeElement, this.topRight.nativeElement], {
            sizes: [75, 25],
            gutterSize: 12,
        });

    }
    public updateEditor(editor: WorkbenchEditor) {

    }

}
