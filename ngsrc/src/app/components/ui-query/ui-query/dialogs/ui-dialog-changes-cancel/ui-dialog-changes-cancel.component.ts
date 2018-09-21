import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
    selector: "ui-dialog-changes-cancel",
    templateUrl: "./ui-dialog-changes-cancel.component.html",
    styleUrls: ["./ui-dialog-changes-cancel.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogChangesCancelComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<UiDialogChangesCancelComponent>,
        @Inject(MAT_DIALOG_DATA) public data: boolean) { }

    ngOnInit() {
    }

}
