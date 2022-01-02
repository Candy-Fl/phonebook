import './js/util.js';
import './scss/base.scss';
import './js/api.js';
import './js/generation-card.js';
import { createCardItem } from './js/util.js';

// set number of contacts
document.querySelector('.header__count').textContent = `${localStorage.length - 1} contatcs`;

for (let i = 0; i<localStorage.length; i++) {
    createCardItem(JSON.parse(localStorage.getItem(`${i}`)));
}