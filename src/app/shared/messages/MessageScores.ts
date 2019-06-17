import {PlayerScore} from '../models/Score';

export class MessageScores {

    private _scores:PlayerScore[];


    constructor(obj) {
        for (var prop in obj) this[prop] = obj[prop];
    }

    get scores(): PlayerScore[] {
        return this._scores;
    }

    set scores(value: PlayerScore[]) {
        this._scores = value;
    }
}