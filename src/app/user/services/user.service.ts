import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../config.js';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  login() {
  }
}
