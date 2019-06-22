import {PlayerScore} from "./Score";

export class PlayerScoreResponse {

    public scores:PlayerScore[];
    private success:boolean;


    get getscores(): PlayerScore[] {
        return this.scores;
    }

    set setscores(value: PlayerScore[]) {
        this.scores = value;
    }

    get getsucces(): boolean {
        return this.success;
    }

    set setsucces(value: boolean) {
        this.success = value;
    }


    constructor(scores: PlayerScore[], success: boolean) {
        this.scores = scores;
        this.success = success;
    }
}