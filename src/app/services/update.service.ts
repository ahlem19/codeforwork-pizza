import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './socket.service';
import { PizzaService } from './pizza.service';

const CHAT_URL = 'ws://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class refreshService {
  public messages: Subject<any>;

  constructor(private _pizzaService: PizzaService,wsService: WebsocketService) {
    wsService.connect(CHAT_URL).subscribe((res: MessageEvent) => {
      // let data = JSON.parse(res.data);
      console.log(res);
      this._pizzaService.loadPizzaFromAPI();
      // this.messages = data;
    });
  }
}