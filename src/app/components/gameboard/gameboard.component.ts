import {Component, OnInit} from '@angular/core';
import {GameSocketService} from '../../shared/services/gameSocket/game-socket.service';
import {AuthService} from '../../shared/services/authenticate/auth.service';
import {Router} from '@angular/router';
import {GameServiceService} from '../../shared/services/gameservice/game-service.service';
import {Player} from '../../shared/models/Player';

import {forEach} from '@angular/router/src/utils/collection';
import {MessagePlayerInQueue} from '../../shared/messages/MessagePlayerInQueue';
import {MessageUpdateque} from '../../shared/messages/MessageUpdateque';
import {MessageGameStarted} from '../../shared/messages/MessageGameStarted';
import {MessagePlayerJoinQueue} from '../../shared/messages/MessagePlayerJoinQueue';
import {MessageCardPlayed} from '../../shared/messages/MessageCardPlayed';
import {MessageUpdateGame} from '../../shared/messages/MessageUpdateGame';

@Component({
    selector: 'app-gameboard',
    templateUrl: './gameboard.component.html',
    styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
    private message;
    players: Player[] = [];
    hand:number[]=[];
    lastPlayed: number;
    votes: number;


    constructor(private ws: GameSocketService, private auth: AuthService, public router: Router, public game: GameServiceService) {
        this.ws.messages.subscribe(msg => {
            this.switchComponent(msg);
        });
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

    switchComponent(msg) {
        switch (msg.getMessageType) {
            case 'UpdateGame':
                this.message = new MessageUpdateGame(JSON.parse(msg.getMessageData));
                    this.updateService(this.message);
                    this.updateGame();
                    console.log(this.message.lastPlayed)

                break;

            default:
                console.log('rip ' + msg.getMessageType);
                break;
        }
    }
    playCard(){
        let message = new MessageCardPlayed(this.auth.user.uid,this.hand[this.hand.length]);
        console.log(this.hand[this.hand.length]);
        this.ws.sendMsg(message);

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

    }



}
