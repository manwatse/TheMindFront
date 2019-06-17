export class MessageUpdateque {

     playernumber:number;
    constructor(playernumber: number) {
        this.playernumber = playernumber;
    }

    getplayers():number{
        return this.playernumber;
    }
}