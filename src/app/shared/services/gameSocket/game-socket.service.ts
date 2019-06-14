import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {EncapsulatingMessage} from '../../messages/EncapsulatingMessage';
import {WebsocketService} from '../websocket/websocket.service';
import {MessageConnectUser} from '../../messages/MessageConnectUser';

const CHAT_URL = 'ws://localhost:8099/TheMind/websocket/';
@Injectable({
  providedIn: 'root'
})


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
      console.log("Message recieved")
      this.messages = new Subject<EncapsulatingMessage>();
      this.messages = <Subject<EncapsulatingMessage>>this.ws.connect(CHAT_URL).pipe
      (map((response: MessageEvent): EncapsulatingMessage => {
          let msg = new EncapsulatingMessage(JSON.parse(response.data));
          return msg;
      }));
      // setInterval(function () {
      //     console.log('ping order');
      //     let obj = new MessageConnectUser();
      //     $this.sendMsg(obj);
      // }, 10000);
  }
    sendMsg(msg: object) {
      console.log("Message send")
        let message = new EncapsulatingMessage(null);
        message.setMessageType = msg.constructor.name;
        message.setMessageData = JSON.stringify(msg);
        this.messages.next(message);
    }
}
