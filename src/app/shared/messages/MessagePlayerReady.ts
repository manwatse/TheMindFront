export class MessagePlayerReady {
    private _numberOfPlayers;

    constructor(numberOfPlayers) {
        this._numberOfPlayers = numberOfPlayers;
    }

    get numberOfPlayers() {
        return this._numberOfPlayers;
    }
}