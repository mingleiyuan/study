import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>('assets/users.json');
  }

  getUser(id: number) : Observable<User> {
    console.log('getUser', id);
    return this.getUsers().pipe(
      delay(5000),
      map(users => users.find( user => user.id == id)!)
    );
  }

}

export type User = {
  id: number;
  name: string;
  email: string;
}
