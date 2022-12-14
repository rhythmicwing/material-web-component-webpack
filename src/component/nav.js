import './nav.scss';

console.log("nav here1");


// Instantiation drawer, add action to hamburger button to open drawer
import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const drawerTriggerBtn = document.getElementById('drawerTrigger')
drawerTriggerBtn.addEventListener('click', ()=> {
    // Set the draw to whatever state it was not in last
    drawer.open = !drawer.open;
});


// Instantiation list, add ripple effect to list items
import {MDCList} from '@material/list';
const list = new MDCList(document.querySelector('.drawerNav'));

import {MDCRipple} from '@material/ripple';
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
 








