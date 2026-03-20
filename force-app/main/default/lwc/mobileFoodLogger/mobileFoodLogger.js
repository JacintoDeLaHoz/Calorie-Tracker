

import {LightningElement} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MobileFoodLogger extends LightningElement {
    handleSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Success!',
            message: 'Food logged successfully.',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}