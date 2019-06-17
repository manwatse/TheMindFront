export  class MessageCardPlayed {

    private playerid:string;
    private cardPlayed:number;


    constructor(playerid: string, cardPlayed: number) {
        this.playerid = playerid;
        this.cardPlayed = cardPlayed;
    }
}