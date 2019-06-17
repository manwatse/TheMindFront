import { Injectable } from '@angular/core';
import {Player} from '../../models/Player';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private _hand:number[]=[];

  constructor() { }

    _gameId:number;
    _players:Player[];
    _lastPlayed:number;
    private _lifePoints:number;
    private _votes:number;
    private _numberOfPlayers:number;


    getplayers():Player[] {
      return  this._players;
    }

    get lastPlayed(): number {
        return this._lastPlayed;
    }

    set lastPlayeds(value: number) {
        this._lastPlayed = value;
    }

    get votes(): number {
        return this._votes;
    }

    set setvotes(value: number) {
        this._votes = value;
    }

    get lifePoints():number {
        return this._lifePoints;
    }

    getgameIds():number {
      return  this._gameId
    }

    getnumberOfPlayers():number {
      return  this._numberOfPlayers;
    }

    setnumberOfPlayers(players: number) {
      this._numberOfPlayers=players;
    }

    setplayers(playerss: any,playerId:string) {
        this._players=playerss;
        for(var i = 0; i < this._players.length; i++){
          let temp=this._players[i];
          let tempid=temp.id;
          if (tempid==playerId) {
            this._hand= temp.cards;
          }

        }
    }

    setgameId(gameIds: any) {
        this._gameId=gameIds;
    }


    set lifePoints(value: number) {
        this._lifePoints = value;
    }


    get hand(): number[] {
        return this._hand;
    }

    set votes(value: number) {
        this._votes = value;
    }
}
