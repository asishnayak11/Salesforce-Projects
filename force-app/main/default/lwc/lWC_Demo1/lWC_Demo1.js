import { LightningElement, track } from 'lwc';

export default class LWC_Demo1 extends LightningElement {
    @track inputTextValue;
    submitText(event){
        console.log(document.getElementById('text-input-id-47'));
        this.inputTextValue = document.getElementById('text-input-id-47').value;
    }

}