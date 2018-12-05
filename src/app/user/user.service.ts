import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfig, IResultAuth } from '../models/interfaces.js';
import * as config from '../config.js';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  config: IConfig = config;
  constructor(private _http: HttpClient) { }

  login(auth: any, cb = () => { }) {
    this._http.post(`${this.config.local.rootUrl}auth`, auth)
      .subscribe((res: IResultAuth) => {
        if (res.error === 1) {

        }
      });
  }
}
