export class PlayerScore{
    public _playerId:string;
    private _playerscore:number;

    constructor(obj) {
        for (var prop in obj) this[prop] = obj[prop]
    }


    get playerId(): string {
        return this._playerId;
    }

    set playerId(value: string) {
        this._playerId = value;
    }


    get playerscore(): number {
        return this._playerscore;
    }

    set playerscore(value: number) {
        this._playerscore = value;
    }
}