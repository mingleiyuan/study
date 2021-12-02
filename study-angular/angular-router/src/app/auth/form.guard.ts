import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { SafeData } from "./safe-data.interface";

@Injectable({ providedIn: 'root' })
export class FormGuard implements CanDeactivate<SafeData> {
    constructor(private dialog: MatDialog){}

    canDeactivate(component: SafeData, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        console.log('canDeactive', component);
        
        if(!component.isDataSaved()) {
            const dialogRef = this.dialog.open(ConfirmDialogComponent);
            return dialogRef.afterClosed();
        }

        return true;
    }


}