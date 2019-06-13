export class Score{
    private playerId:string;
    private score:number;

    constructor(obj) {
        for (var prop in obj) this[prop] = obj[prop];
    }

    get playerid():string{
        return this.playerId;
    }

    get score():number{
        return this.score;
    }

}