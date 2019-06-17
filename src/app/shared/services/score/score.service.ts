import { Injectable } from '@angular/core';
import {PlayerScore} from '../../models/Score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
    private _scores: PlayerScore[];
  constructor() { }


    get scoress(): PlayerScore[] {
        return this._scores;
    }

    set scoress(value: PlayerScore[]) {
        this._scores = value;
    }
}
