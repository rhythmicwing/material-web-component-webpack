import './mdcbundle.scss';




// Top App Bar Instantiation
import {MDCTopAppBar} from '@material/top-app-bar';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);



// Drawer Instantiation, add action to hamburger button to open drawer
import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

    //Add action to hamburger button, to open/close drawer
    const drawerTriggerBtn = document.getElementById('drawerTrigger')
    drawerTriggerBtn.addEventListener('click', ()=> {
        console.log("trigger");
        // Set the draw to whatever state it was not in last
        drawer.open = !drawer.open;
    });



// List Instantiation
import {MDCList} from '@material/list';
const list = new MDCList(document.querySelector('.drawerNav'));



// Form Field Instantiation
import {MDCFormField} from '@material/form-field';
const formField = document.querySelectorAll('.mdc-form-field');
for (const item of formField) {
   new MDCFormField.attachTo(item);
}
formField.input = checkbox;



// CheckBox Instantiation
import {MDCCheckbox} from '@material/checkbox';
const checkbox = document.querySelectorAll('.mdc-checkbox');
for (const item of checkbox) {
   new MDCCheckbox.attachTo(item);
}



// Select Instantiation
import {MDCSelect} from '@material/select';
const select = document.querySelectorAll('.mdc-select');
for (const item of select) {
   new MDCSelect.attachTo(item);
}








// Ripple Effect Instantiation
import {MDCRipple} from '@material/ripple';
    //For List within Drawer
    const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));

    //For Buttons
    const buttonRipple = document.querySelectorAll('.mdc-button');
    for (const item of buttonRipple) {
        new MDCRipple.attachTo(item);
    }

    //For Card
    const cardRipple = document.querySelectorAll('.mdc-card__primary-action');
    for (const item of cardRipple) {
        new MDCRipple.attachTo(item);
    }

    //For Icon Button
    const iconButtonRipple = document.querySelectorAll('.mdc-icon-button');
    for (const item of iconButtonRipple) {
        new MDCRipple.attachTo(item);
    }
    iconButtonRipple.unbounded = true;