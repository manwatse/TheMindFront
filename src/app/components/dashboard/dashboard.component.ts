import {Component, OnInit, NgZone} from '@angular/core';
import {AuthService} from '../../shared/services/authenticate/auth.service';
import {Router} from '@angular/router';
import {MessageGetScores} from '../../shared/messages/MessageGetScores';
import {MessageScores} from '../../shared/messages/MessageScores';
import {ScoreService} from '../../shared/services/score/score.service';
import {Observer} from '../../shared/services/observer/Observer';
import {EncapsulatingMessage} from '../../shared/messages/EncapsulatingMessage';
import {Subject} from '../../shared/services/observer/Subject';
import {WebsocketService} from '../../shared/services/websocket/websocket.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, Observer {

    private message;
    private encapsulatingMessage: EncapsulatingMessage;
    private subject: Subject;

    constructor(public authService: AuthService, public router: Router, public ngZone: NgZone, public score: ScoreService, public ws: WebsocketService) {

        this.subject=ws;
        ws.registerObserver(this)

    }

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

    update(message: EncapsulatingMessage) {
        // let encapsulatingMessage= message;
        // this.encapsulatingMessage=encapsulatingMessage
        // this.switchComponent(this.encapsulatingMessage)
    }

    gethiscors() {
        let message = new MessageGetScores();
        this.ws.send(message);
    }
}
