import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../shared/services/authenticate/auth.service';
import {Router} from '@angular/router';
import {GameServiceService} from '../../shared/services/gameservice/game-service.service';
import {Player} from '../../shared/models/Player';

import {MessageUpdateGame} from '../../shared/messages/MessageUpdateGame';
import {Subject} from '../../shared/services/observer/Subject';
import {EncapsulatingMessage} from '../../shared/messages/EncapsulatingMessage';
import {Observer} from '../../shared/services/observer/Observer';
import {MessageCardPlayed} from '../../shared/messages/MessageCardPlayed';
import {WebsocketService} from '../../shared/services/websocket/websocket.service';

@Component({
    selector: 'app-gameboard',
    templateUrl: './gameboard.component.html',
    styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit,Observer {
    private message;
    private encapsulatingMessage:EncapsulatingMessage;
    private subject:Subject;
    players: Player[] = [];
    hand:number[]=[];
    lastPlayed: number;
    votes: number;


    constructor(private ws: WebsocketService,private auth:AuthService,public router: Router,public game:GameServiceService) {
        this.subject=ws;
        ws.registerObserver(this)


    }

    ngOnInit() {

        if (this.auth.isLoggedIn == false) {
            this.router.navigate(['']);
        }

        this.players = this.game.getplayers();
        this.lastPlayed = 0;
        this.votes = this.game.votes;
        this.hand=this.game.hand;
        console.log(this.hand[this.hand.length]);
        console.log("got to gameboard")

    }

    update(message: EncapsulatingMessage) {
        let encapsulatingMessage= message;
        this.encapsulatingMessage=encapsulatingMessage
        this.switchComponent(this.encapsulatingMessage)
    }

    switchComponent(msg) {
        switch (msg.getMessageType) {
            case 'UpdateGame':
                this.message = new MessageUpdateGame(JSON.parse(msg.getMessageData));
                    this.updateService(this.message);
                    this.updateGame();


                break;

            default:
                console.log('rip ' + msg.getMessageType);
                break;
        }
    }
    playCard(){
        let message = new MessageCardPlayed(this.auth.user.uid,this.hand.pop());
        console.log(this.hand[this.hand.length]);
        this.ws.send(message);

    }

    updateGame(){
        this.lastPlayed= this.game.lastPlayed;
        this.players=this.game._players;
        this.hand=this.game.hand;
        this.votes=this.game.votes;
    }
    updateService(message:MessageUpdateGame){
        this.game.votes=message.Votes;
        this.game._players=message.players;
        this.game.lastPlayeds= message.lastPlayed;
        this.game.lifePoints=message.lifePoints;

        console.log(this.message.lastPlayed)

    }





}
