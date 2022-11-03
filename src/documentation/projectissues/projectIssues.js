
import './projectIssues.scss';

import {MDCRipple} from '@material/ripple';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCDialog} from '@material/dialog';
import {MDCSelect} from '@material/select';
import {MDCDataTable} from '@material/data-table';

const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

//const select = new MDCSelect(document.querySelector('.mdc-select'));

const select = document.querySelectorAll('.mdc-select');
for (const item of select) {
   new MDCSelect.attachTo(item);
}
// select.listen('MDCSelect:change', () => {
//   alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
// });








const selector = '.mdc-button, .mdc-card__primary-action';
const ripples = document.querySelectorAll(selector);
for (const item of ripples) {
   new MDCRipple.attachTo(item);
}

const tabBar = document.querySelectorAll('.mdc-tab-bar');
for (const item of tabBar) {
   new MDCTabBar.attachTo(item);
}

const textField = document.querySelectorAll('.mdc-text-field');
for (const item of textField) {
   new MDCTextField.attachTo(item);
}


const issuesBoxBtn = document.getElementById('issuesBoxBtn');
const testCasesBtn = document.getElementById('testCasesBtn');
testCasesBtn.addEventListener('click', () => {
    const testCasesBox = document.getElementById('testCasesBox');
    // 👇️ removes element from DOM
    issuesBox.style.display = 'none';
    testCasesBox.style.display = '';
});
issuesBoxBtn.addEventListener('click', () => {
    const issuesBox = document.getElementById('issuesBox');
    // 👇️ removes element from DOM
    testCasesBox.style.display = 'none';
    issuesBox.style.display = '';
});



const dialogTestEle = document.getElementById('mdc-dialog-test');
const dialogTest = new MDCDialog(dialogTestEle);

document.querySelector('#editButton').addEventListener('click', function (evt) {
    dialogTest.open();
});


const uploadTestButtonTarget = document.getElementById('uploadTestButtonTarget');
const uploadTestButton = document.getElementById('uploadTestButton');
uploadTestButton.addEventListener('click', ()=> {
    // Set the draw to whatever state it was not in last
    uploadTestButtonTarget.click();
});


