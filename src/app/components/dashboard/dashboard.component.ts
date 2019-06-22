import {Component, OnInit, NgZone} from '@angular/core';
import {AuthService} from '../../shared/services/authenticate/auth.service';
import {Router} from '@angular/router';
import {ScoreService} from '../../shared/services/score/score.service';
import {HttpClient} from "@angular/common/http";
import {PlayerScoreResponse} from "../../shared/models/PlayerScoreResponse";
import {PlayerScoreDTO} from "../../shared/models/PlayerScoreDTO";
import {PlayerScore} from "../../shared/models/Score";


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    userScore: number;
    restresponse:PlayerScoreResponse;
    scorelist:PlayerScore[];

    constructor(public authService: AuthService, public router: Router, public ngZone: NgZone, public score: ScoreService, public http: HttpClient) {
    }

    ngOnInit() {
        this.addUser();
        this.userScore=this.score.userScore;
    }

    addUser() {
        this.score.createUser(new PlayerScoreDTO(this.authService.user.uid, 0)).subscribe(data => {
            this.restresponse = data;
            this.scorelist= this.restresponse.scores;
            this.userScore = this.scorelist[0].score;
            this.score.userScore=this.userScore;

        })
    }

}
