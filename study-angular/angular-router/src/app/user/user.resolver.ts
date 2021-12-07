import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
<<<<<<< HEAD
import { catchError, EMPTY, Observable, tap } from 'rxjs';
=======
import { catchError, EMPTY, Observable } from 'rxjs';
>>>>>>> a9b40df3ff743b36c111d9b5932fcacbd6822717
import { User, UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private users: UsersService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
<<<<<<< HEAD
    console.log('UserResolver',route.params);
=======
>>>>>>> a9b40df3ff743b36c111d9b5932fcacbd6822717
    return this.users.getUser(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate([""]);
        return EMPTY;
      })
    );
  }
}
