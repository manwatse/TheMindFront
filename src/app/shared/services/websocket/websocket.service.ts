import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Observable} from 'rxjs';
import { Observer} from 'rxjs';

@Injectable()
export class WebsocketService {

    constructor() { }

    private  subject: Subject<MessageEvent>;
    public  connect(url): Subject <MessageEvent>{
        if (!this.subject){
            this.subject= this.create(url);
            console.log("connected")
        }
        else {
            console.log("not connected")
        }
        return this.subject;

    };
    private create(url): Subject<MessageEvent>{
        let ws = new WebSocket(url);
        let observable = Observable.create(
            (obs: Observer<MessageEvent>)=>{
                ws.onmessage= obs.next.bind(obs);
                ws.onerror=obs.error.bind(obs);
                ws.onclose=obs.complete.bind(obs);
                return ws.close.bind(ws);
            })

        let observer={
            next: (data:string) =>{
                if (ws.readyState===WebSocket.OPEN){
                    ws.send(JSON.stringify(data))
                }
            }
        }
        return Subject.create(observer,observable);
    }
}
