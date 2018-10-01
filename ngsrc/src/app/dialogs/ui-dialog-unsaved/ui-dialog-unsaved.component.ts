import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
    selector: "ui-dialog-unsaved",
    templateUrl: "./ui-dialog-unsaved.component.html",
    styleUrls: ["./ui-dialog-unsaved.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogUnsavedComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<UiDialogUnsavedComponent>,
        @Inject(MAT_DIALOG_DATA) public filename: string) { }

    ngOnInit() {
    }

}
