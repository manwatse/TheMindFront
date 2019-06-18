import {EncapsulatingMessage} from '../../messages/EncapsulatingMessage';

export interface Observer {
    update(message:EncapsulatingMessage)
}
