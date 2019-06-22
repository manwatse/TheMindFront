import { Injectable } from '@angular/core';

import {Subject} from '../observer/Subject';
import {Observer} from '../observer/Observer';
import {EncapsulatingMessage} from '../../messages/EncapsulatingMessage';


const SERVER_URL = 'ws://localhost:8099/TheMind/websocket/';
const socket = new WebSocket(SERVER_URL);

@Injectable()
export class WebsocketService implements Subject{
    private  message: EncapsulatingMessage;
    private observers:Observer[]=[];


    constructor() {this.connect() }

    public connect() {

        socket.onopen = (event: MessageEvent) => {
            console.log('Socket opened!');
            console.log(event.data);
        };

        socket.onmessage = (event: MessageEvent) => {
            this.message= new EncapsulatingMessage(JSON.parse(event.data));
            this.notifyObserver();
            console.log('Subject received!');
            console.log(event.data);
        };

        socket.onerror = (event: ErrorEvent) => {
            console.log('Socket error!');
            console.log(event.message);
        };

        socket.onclose = (event: CloseEvent) => {
            console.log('Socket closed!');
            console.log(event.reason);
        };
    }

    public send(msg:object){
        let message = new EncapsulatingMessage(null);
        message.setMessageType = msg.constructor.name;
        message.setMessageData = JSON.stringify(msg);


        socket.send(JSON.stringify(message));
    }

    notifyObserver() {
    for (let observer of this.observers){
        observer.update(this.message)
    }
    }

    registerObserver(o:Observer) {
        this.observers.push(o)
    }

    removeObserver(o:Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index,1);
    }

}
