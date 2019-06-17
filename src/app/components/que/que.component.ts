import {Component, OnInit} from '@angular/core';
import {GameSocketService} from '../../shared/services/gameSocket/game-socket.service';
import {MessagePlayerReady} from '../../shared/messages/MessagePlayerReady';
import {MessagePlayerInQueue} from '../../shared/messages/MessagePlayerInQueue';
import {MessagePlayerJoinQueue} from '../../shared/messages/MessagePlayerJoinQueue';
import {AuthService} from '../../shared/services/authenticate/auth.service';
import {MessageUpdateque} from '../../shared/messages/MessageUpdateque';
import {MessageGameStarted} from '../../shared/messages/MessageGameStarted';
import {Router} from '@angular/router';
import {GameServiceService} from '../../shared/services/gameservice/game-service.service';

@Component({
    selector: 'app-que',
    templateUrl: './que.component.html',
    styleUrls: ['./que.component.css']
})
export class QueComponent implements OnInit {
    private message;



    constructor(private ws: GameSocketService,private auth:AuthService,public router: Router,public game:GameServiceService) {
        this.ws.messages.subscribe(msg => {
            this.switchComponent(msg);
        });


    }

    ngOnInit() {
        if(this.auth.isLoggedIn==false){
            this.router.navigate([''])
        }

    }

    switchComponent(msg) {
        switch (msg.getMessageType) {
            case 'Joined Queue':
                 this.message = new MessagePlayerInQueue(JSON.parse(msg.getMessageData));
                console.log(this.message.message);
                break;
            case 'More players':
                 this.message = new MessageUpdateque(JSON.parse(msg.getMessageData));

                break;
            case 'Game Started':
                this.message = new MessageGameStarted(JSON.parse(msg.getMessageData));

                this.game.setplayers(this.message.getplayerss(),this.auth.user.uid)
                this.game.setgameId(this.message.getgameId());
                this.game.lifePoints=this.message.getlifePoints();
                this.game.votes=this.message.votes;

                this.router.navigate(['/game'])

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
