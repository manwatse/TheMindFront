export class Player {

    private _id:string;
    private sessionId:string;
    private _cards:number[];


    constructor(id: string, sessionId: string, cards: number[]) {
        this._id = id;
        this.sessionId = sessionId;
        this._cards = cards;
    }


    get cards(): number[] {
        return this._cards;
    }

    set cards(value: number[]) {
        this._cards = value;
    }


    get id(): string {
        return this._id;
    }
}