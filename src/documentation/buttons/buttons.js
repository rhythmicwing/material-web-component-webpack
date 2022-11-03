import './buttons.scss';
import {MDCRipple} from '@material/ripple';

//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const buttonRipple = document.querySelectorAll('.mdc-button');
for (const item of buttonRipple) {
   new MDCRipple.attachTo(item);
}

console.log("buttons here1");
