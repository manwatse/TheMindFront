import {Player} from '../models/Player';

export class MessageUpdateGame {

    private _players: Player[];
    private _actor:string;
    private _lastPlayed:number;
    private _level:number;
    private _gameId:number;
    private _Votes:number;
    private _lifePoints:number;
    private _gameWon:boolean;


    constructor(obj) {
        for (var prop in obj) this[prop] = obj[prop];
    }

    get players(): Player[] {
        return this._players;
    }

    get actor(): string {
        return this._actor;
    }

    get lastPlayed(): number {
        return this._lastPlayed;
    }

    get level(): number {
        return this._level;
    }

    get gameId(): number {
        return this._gameId;
    }

    get Votes(): number {
        return this._Votes;
    }

    get lifePoints(): number {
        return this._lifePoints;
    }

    set players(value: Player[]) {
        this._players = value;
    }

    set actor(value: string) {
        this._actor = value;
    }

    set lastPlayed(value: number) {
        this._lastPlayed = value;
    }

    set level(value: number) {
        this._level = value;
    }

    set gameId(value: number) {
        this._gameId = value;
    }

    set Votes(value: number) {
        this._Votes = value;
    }

    set lifePoints(value: number) {
        this._lifePoints = value;
    }

    get gameWon(): boolean {
        return this._gameWon;
    }

    set gameWon(value: boolean) {
        this._gameWon = value;
    }
}