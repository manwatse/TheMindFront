import {Observer} from './Observer';


export interface Subject {
    registerObserver(o:Observer);
    removeObserver(o:Observer);
    notifyObserver(o:Observer);

    send(message: object): void;
}