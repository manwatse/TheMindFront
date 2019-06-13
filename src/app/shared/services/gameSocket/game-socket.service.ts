import { Injectable } from '@angular/core';
import {EncapsulatingMessage} from '../../messages/EncapsulatingMessage';
import {Subject} from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {WebsocketService} from '../websocket/websocket.service';
import {MessageConnectUser} from '../../messages/MessageConnectUser';

@Injectable({
  providedIn: 'root'
})

const CHAT_URL = 'ws://localhost:8095/the-mind/websocket/';
export class GameSocketService {

    public messages: Subject<EncapsulatingMessage>;
    public connectAsOperator;

  constructor(private ws:WebsocketService) {
      const $this = this;
      this.connectAsOperator = function () {
          console.log('setting callback');
          let obj = new MessageConnectUser();
          $this.sendMsg(obj);
      };
      console.log("new order service")
      this.messages = new Subject<EncapsulatingMessage>();
      this.messages = <Subject<EncapsulatingMessage>>this.ws.connect(CHAT_URL)
          .map((response: MessageEvent): EncapsulatingMessage => {
              let msg = new EncapsulatingMessage(JSON.parse(response.data));
              return msg;
          });
      setInterval(function () {
          console.log('ping order');
          let obj = new MessageConnectUser();
          $this.sendMsg(obj);
      }, 10000);
  }
    sendMsg(msg: object) {
        let message = new EncapsulatingMessage(null);
        message.setMessageType = msg.constructor.name;
        message.setMessageData = JSON.stringify(msg);
        this.messages.next(message);
    }
}
