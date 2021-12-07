import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { User, UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private users: UsersService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.users.getUser(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate([""]);
        return EMPTY;
      })
    );
  }
}
