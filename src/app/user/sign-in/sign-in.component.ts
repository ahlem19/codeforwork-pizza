import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  auth = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    remember: new FormControl()
  });
  constructor(private _user: UserService) { }

  ngOnInit() {
  }
  submit($event) {
    console.log(this.auth.value);
    this._user.login(this.auth.value);
  }
}
