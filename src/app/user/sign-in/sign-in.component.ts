import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  private returnUrl: string;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
      remember : [false]
    });

    // reset login status
    this._authenticationService.logout();

    // get return url from route parameters od default to '/intro'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/catalog';
  }

  get f() {
    return this.signInForm.controls;
  }

  OnSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }
    this.loading = true;

    this._authenticationService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }
}
