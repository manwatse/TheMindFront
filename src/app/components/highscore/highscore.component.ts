import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/authenticate/auth.service';
import {Router} from '@angular/router';
import {PlayerScore} from '../../shared/models/Score';
import {GameServiceService} from '../../shared/services/gameservice/game-service.service';
import {WebsocketService} from '../../shared/services/websocket/websocket.service';

@Component({
    selector: 'app-highscore',
    templateUrl: './highscore.component.html',
    styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

    getscorelist(): PlayerScore[] {
        return this.scorelist;
    }

    private scorelist:PlayerScore[];


    constructor(private ws: WebsocketService,private auth:AuthService,public router: Router,public game:GameServiceService) {


    }

    ngOnInit() {

    }

    // getHighscore() {
    //     this.http.get('http://localhost/score:8091').subscribe(data => {
    //         this.message= new MessageScores(JSON.parse(data.toString()))
    //         this.score.scoress=this.message;
    //     });
    //
    // }

}
