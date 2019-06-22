import { Injectable } from '@angular/core';
import {PlayerScoreResponse} from "../../models/PlayerScoreResponse";
import {AuthService} from "../authenticate/auth.service";
import { HttpClient} from '@angular/common/http';
import {PlayerScoreDTO} from "../../models/PlayerScoreDTO";
import {PlayerScore} from "../../models/Score";


@Injectable({
  providedIn: 'root'
})
export class ScoreService {
    //region
    private p: PlayerScore;
    private o: PlayerScore;
    private i: PlayerScore;
    private u: PlayerScore;
    //endregion

    private _userScore:number;

  constructor(public http:HttpClient, public authService:AuthService) {
      this.userScore=0;
  }

    baseURL:string ='http://Localhost:8091/themind';

    createUser(user:PlayerScoreDTO){
        return this.http.post<PlayerScoreResponse>(this.baseURL+'/player/create/',user);
    }

    getUserScore(id:string){
        return this.http.get<PlayerScoreResponse>(this.baseURL+'/score/findByID/'+id);
    }

    setPlayerScore(user:PlayerScoreDTO){
        return this.http.post<PlayerScoreResponse>(this.baseURL+'/score/setScore',user);
    }

    getHighScore(){
        return this.http.get<PlayerScoreResponse>(this.baseURL+'/score/all');
    }

    get userScore(): number {
        return this._userScore;
    }

    set userScore(value: number) {
        this._userScore = value;
    }

    // makeList(){
    //     let z= JSON.parse(" {\n" + "\"playerId\": \"test\",\n" +"            \"score\": 10\n" +"        }")
    //     this.p=new PlayerScore(z);
    //     let x=JSON.parse(" {\n" + "\"playerId\": \"Mzn08P68YyT4ecysSjWg1sgBVcP2\",\n" +"            \"score\": 1\n" +"        }")
    //     this.o= new PlayerScore(x);
    //     let c= JSON.parse(" {\n" + "\"playerId\": \"PM3ZVK5wPafXyZAoPBxOuhupJXa2\",\n" +"            \"score\": 1\n" +"        }")
    //     this.i= new PlayerScore(c);
    //     let v = JSON.parse(" {\n" + "\"playerId\": \"8VnKMNuZqwWhacIvrWm5ZJs92Dy2\",\n" +"            \"score\": 0\n" +"        }")
    //     this.u= new PlayerScore(v);
    //
    //     this.scores.push(this.p);
    //     this.scores.push(this.o);
    //     this.scores.push(this.i);
    //     this.scores.push(this.u);
    // }
}
