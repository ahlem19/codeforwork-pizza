import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iconfig, IresultAuth } from '../models/interfaces.js';
import * as config from '../config.js';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  config: Iconfig = config;
  constructor(private _http: HttpClient) { }

  login(auth: any, cb = () => { }) {
    this._http.post(`${this.config.local.rootUrl}auth`, auth)
      .subscribe((res: IresultAuth) => {
        if (res.error === 1) {

        }
      });
  }
}
