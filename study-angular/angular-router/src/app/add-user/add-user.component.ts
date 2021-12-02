import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SafeData } from '../auth/safe-data.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, SafeData {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

  isDataSaved() {
    return !this.userForm.dirty;
  }

}
