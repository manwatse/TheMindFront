export class PlayerScoreDTO {

    public playerId:string;
    private playerscore:number;


    constructor(playerId: string, playerscore: number) {
        this.playerId = playerId;
        this.playerscore = playerscore;
    }

    get getplayerId(): string {
        return this.playerId;
    }

    set setplayerId(value: string) {
        this.playerId = value;
    }


    get getplayerscore(): number {
        return this.playerscore;
    }

    set setplayerscore(value: number) {
        this.playerscore = value;
    }

}