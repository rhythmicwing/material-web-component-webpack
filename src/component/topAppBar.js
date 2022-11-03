import './topAppBar.scss';
import {MDCTopAppBar} from '@material/top-app-bar'; 

console.log('topappbar');
// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


import {MDCRipple} from '@material/ripple';

const iconButtonRipple = new MDCRipple(document.querySelector('.topAppRipple'));
iconButtonRipple.unbounded = true; 