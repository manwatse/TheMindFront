import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/authenticate/auth.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ScoreService} from '../../shared/services/score/score.service';
import {PlayerScore} from '../../shared/models/Score';
import {MessageUpdateGame} from '../../shared/messages/MessageUpdateGame';
import {MessageGetScores} from '../../shared/messages/MessageGetScores';
import {MessageScores} from '../../shared/messages/MessageScores';
import {GameSocketService} from '../../shared/services/gameSocket/game-socket.service';

@Component({
    selector: 'app-highscore',
    templateUrl: './highscore.component.html',
    styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

    getscorelist(): PlayerScore[] {
        return this._scorelist;
    }

    private _scorelist:PlayerScore[];
    private  message;

    constructor(private auth: AuthService,private ws: GameSocketService, private router: Router, private http: HttpClient,public score:ScoreService) {

    }

    ngOnInit() {
        this._scorelist=this.score.scoress;

    }

    getHighscore() {
        this.http.get('http://localhost/score:8091').subscribe(data => {
            this.message= new MessageScores(JSON.parse(data.toString()))
            this.score.scoress=this.message;
        });

    }

}
