import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: "ui-dialog-history-clear-confirmation",
    templateUrl: "./ui-dialog-history-clear-confirmation.component.html",
    styleUrls: ["./ui-dialog-history-clear-confirmation.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogHistoryClearConfirmationComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<UiDialogHistoryClearConfirmationComponent>,
    ) { }

    ngOnInit() {
    }

}
