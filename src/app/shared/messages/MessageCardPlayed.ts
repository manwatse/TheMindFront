export  class MessageCardPlayed {

    private playerId:string;
    private cardPlayed:number;


    constructor(playerid: string, cardPlayed: number) {
        this.playerId = playerid;
        this.cardPlayed = cardPlayed;
    }

}