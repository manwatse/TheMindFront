export class MessagePlayerInQueue {

    private _message:string;
    private _numbersOfPlayers:number;


    constructor(message: string, numberOfPlayers:number) {
        this._message = message;
        this._numbersOfPlayers= numberOfPlayers;
    }

    get message(): string {
        return this._message;
    }

    get numbersOfPlayers(): number {
        return this._numbersOfPlayers;
    }
}