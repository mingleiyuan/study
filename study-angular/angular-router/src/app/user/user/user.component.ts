import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user$ = this.route.data.pipe(
      map(data => data?.['user'])
    );
  }

}
