export class PlayerScore{
    public playerId:string;
    public score:number;


    constructor(playerId: string, score: number) {
        this.playerId = playerId;
        this.score = score;
    }

    get getplayerId(): string {
        return this.playerId;
    }

    set setplayerId(value: string) {
        this.playerId = value;
    }


    get getplayerscore(): number {
        return this.score;
    }

    set setplayerscore(value: number) {
        this.score = value;
    }
}