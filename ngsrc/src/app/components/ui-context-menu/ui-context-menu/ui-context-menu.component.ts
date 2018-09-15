import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { UiContextMenuService } from "../service";

@Component({
    selector: "ui-context-menu",
    templateUrl: "./ui-context-menu.component.html",
    styleUrls: ["./ui-context-menu.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiContextMenuComponent implements OnInit {
    public static eventClick = new Subject<string>();
    constructor(private service: UiContextMenuService) { }

    ngOnInit() {
    }
    public onCommand = (command: string) => {
        UiContextMenuComponent.eventClick.next(command);
    }
}
