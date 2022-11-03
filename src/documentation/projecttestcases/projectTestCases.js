import './projectTestCases.scss';

import {MDCTabBar} from '@material/tab-bar';

const tabBar = document.querySelectorAll('.mdc-tab-bar');
for (const item of tabBar) {
   new MDCTabBar.attachTo(item);
} 