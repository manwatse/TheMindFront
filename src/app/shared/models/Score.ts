export class PlayerScore{
    private playerId:string;
    private playerscore:number;

    constructor(obj) {
        for (var prop in obj) this[prop] = obj[prop];
    }

    get playerid():string{
        return this.playerId;
    }

    get score():number{
        return this.playerscore;
    }

}