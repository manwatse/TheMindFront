import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/authenticate/auth.service';
import {Router} from '@angular/router';
import {PlayerScore} from '../../shared/models/Score';
import {GameServiceService} from '../../shared/services/gameservice/game-service.service';
import {WebsocketService} from '../../shared/services/websocket/websocket.service';
import {ScoreService} from "../../shared/services/score/score.service";
import {PlayerScoreResponse} from "../../shared/models/PlayerScoreResponse";

@Component({
    selector: 'app-highscore',
    templateUrl: './highscore.component.html',
    styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {


    restresponse:PlayerScoreResponse;
    scorelist:PlayerScore[];

    constructor(public score:ScoreService,private auth:AuthService,public router: Router,public game:GameServiceService) {


    }

    ngOnInit() {
        this.getScore();


    }
    getScore(){
        this.score.getHighScore().subscribe(data=>{

            this.restresponse=data;
            this.scorelist= this.restresponse.scores;
            this.scorelist.sort(function(a, b){
                return b.score-a.score;
            })
            console.log(this.restresponse.scores)

        })
    }




    //region
    checkScore(){
        this.getScore()
    }
    //endregion
}
