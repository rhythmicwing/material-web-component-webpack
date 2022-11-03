import './formDemo.scss';

import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldIcon} from '@material/textfield/icon';


const radio = document.querySelectorAll('.mdc-radio');
for (const item of radio) {
   new MDCRadio.attachTo(item);
}

const formField = document.querySelectorAll('.mdc-form-field');
for (const item of formField) {
   new MDCFormField.attachTo(item);
}
formField.input = radio;

const textField = document.querySelectorAll('.mdc-text-field');
for (const item of textField) {
   new MDCTextField.attachTo(item);
}

const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));