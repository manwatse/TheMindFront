import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/authenticate/auth.service";
import { Router } from "@angular/router";
import {GameSocketService} from '../../shared/services/gameSocket/game-socket.service';
import { HttpClient } from '@angular/common/http';
import {MessageCardPlayed} from '../../shared/messages/MessageCardPlayed';
import {MessagePlayerInQueue} from '../../shared/messages/MessagePlayerInQueue';
import {MessageUpdateque} from '../../shared/messages/MessageUpdateque';
import {MessageGameStarted} from '../../shared/messages/MessageGameStarted';
import {MessageGetScores} from '../../shared/messages/MessageGetScores';
import {PlayerScore} from '../../shared/models/Score';
import {MessageScores} from '../../shared/messages/MessageScores';
import {ScoreService} from '../../shared/services/score/score.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    private message;


    constructor(
        public authService: AuthService,
        private ws: GameSocketService,
        public router: Router,
        public ngZone: NgZone,
        public score:ScoreService
    ) {this.ws.messages.subscribe(msg => {this.switchComponent(msg);});}

    switchComponent(msg) {
        switch (msg.getMessageType) {
            case 'scores':
                this.message = new MessageScores(JSON.parse(msg.getMessageData));
                this.score.scoress=this.message.scores;
                this.router.navigate(['/highscore'])
                console.log("score message recieved")
                break;
            default:
                console.log('rip ' + msg.getMessageType);
                break;
        }

    }

    ngOnInit() {
    }



    gethiscors(){
        let message = new MessageGetScores();
        this.ws.sendMsg(message);
    }
}
