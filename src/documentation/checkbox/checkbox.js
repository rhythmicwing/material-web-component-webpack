import './checkbox.scss';

console.log("check here1");

import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';


const checkbox = document.querySelectorAll('.mdc-checkbox');
for (const item of checkbox) {
   new MDCCheckbox.attachTo(item);
}
const formField = document.querySelectorAll('.mdc-form-field');
for (const item of formField) {
   new MDCFormField.attachTo(item);
}
formField.input = checkbox;