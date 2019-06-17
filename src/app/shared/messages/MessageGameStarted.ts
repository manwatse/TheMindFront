
import {Player} from '../models/Player';

export class MessageGameStarted {

    constructor(obj) {
        for (var prop in obj) this[prop] = obj[prop];
    }

    private _gameId:number;
    private _lifePoints:number;
    private _Votes:number;
    private _players: Player[];



    getgameId(): number {
        return this._gameId;
    }

    getlifePoints(): number {
        return this._lifePoints;
    }

    get Votes(): number {
        return this._Votes;
    }

    getplayerss(): Player[] {
        return this._players;
    }


    set gameId(value: number) {
        this._gameId = value;
    }

    set lifePoints(value: number) {
        this._lifePoints = value;
    }

    set Votes(value: number) {
        this._Votes = value;
    }

    set players(value: Player[]) {
        this._players = value;
    }
}