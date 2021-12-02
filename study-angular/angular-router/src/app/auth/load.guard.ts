import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class LoadGuard implements CanLoad {
    constructor(private auth: AuthService, private router: Router) {}
    
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('load checking ...');
        return this.auth.isLoggedIn().pipe(
            map(isLoggedIn => isLoggedIn || this.router.createUrlTree(['']))
        );        
    }
    
}