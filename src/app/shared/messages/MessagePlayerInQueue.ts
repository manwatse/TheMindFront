export class MessagePlayerInQueue {

    private _message:string;

    constructor(message: string) {
        this._message = message;

    }

    get message(): string {
        return this._message;
    }

}