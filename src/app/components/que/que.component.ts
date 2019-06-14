import {Component, OnInit} from '@angular/core';
import {GameSocketService} from '../../shared/services/gameSocket/game-socket.service';
import {MessagePlayerReady} from '../../shared/messages/MessagePlayerReady';
import {MessagePlayerInQueue} from '../../shared/messages/MessagePlayerInQueue';
import {MessagePlayerJoinQueue} from '../../shared/messages/MessagePlayerJoinQueue';
import {AuthService} from '../../shared/services/auth.service';

@Component({
    selector: 'app-que',
    templateUrl: './que.component.html',
    styleUrls: ['./que.component.css']
})
export class QueComponent implements OnInit {


    constructor(private ws: GameSocketService,private auth:AuthService) {
        this.ws.messages.subscribe(msg => {
            this.switchComponent(msg);
        });


    }

    ngOnInit() {

    }

    switchComponent(msg) {
        switch (msg.getMessageType) {
            case 'Joined Queue':
                let message = new MessagePlayerInQueue(JSON.parse(msg.getMessageData));
                console.log(message.message);
                break;

            default:
                console.log('rip ' + msg.getMessageType);
                break;
        }
    }

    JoinQueue(){

        let message = new MessagePlayerJoinQueue(this.auth.user.uid);
        this.ws.sendMsg(message);
    }

}
