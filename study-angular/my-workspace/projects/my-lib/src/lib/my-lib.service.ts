import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  myLib() : string {
    return 'my lib service';
  }
}
