// function for generate user card
import {getData} from "./api.js";
import { toggleButton } from "./util.js";
import {confirmSettings} from "./util.js";
const example = [];

const generateCard = (user) => {
    const li = document.createElement("li");
    // find template copy and save it to cardExample
    const cardExample = document.querySelector('#card').content.querySelector('.popup');
    // clone it
    const userElement = cardExample.cloneNode(true);
    // append id for current card
    userElement.id = user.id; 
    // append avatart to card
    // userElement.querySelector('.popup__avatar').src = user.avatar;
    // append user name and title
    userElement.querySelector('.popup__title').textContent = user.name;
    userElement.querySelector('.popup__name').value = user.name;
    // transform name data to string for LocalStorage

    // append userName (nickName)
    userElement.querySelector('.popup__userName').value = user.username;

    // append user phone 
    userElement.querySelector('.popup__number').value = user.phone;
    // append user email 
    userElement.querySelector('.popup__email').value = user.email;

    // append user webSite
    userElement.querySelector('.popup__website').value = user.website;

    // append information about address
    userElement.querySelector('.popup__address--city').value = user.address.city;
    userElement.querySelector('.popup__address--country').value = user.address.country;
        // about geo
    userElement.querySelector('.pop__geo--lat').value = user.address.geo.lat;
    userElement.querySelector('.pop__geo--lng').value = user.address.geo.lng;

    // and other info about address
    userElement.querySelector('.popup__address--state').value = user.address.state;
    userElement.querySelector('.popup__address--street-a').value = user.address.streetA;
    userElement.querySelector('.popup__address--street-b').value = user.address.streetB;
    userElement.querySelector('.popup__address--street-c').value = user.address.streetC;
    userElement.querySelector('.popup__address--street-d').value = user.address.streetD;
    userElement.querySelector('.popup__address--zipcode').value = user.address.zipcode;

    // set checkbox for favorite contacts
    const favotireCheckbox = userElement.querySelector('.popup__favorite');
    if (user.favorite) {
        favotireCheckbox.checked = true;
    };

    // append information about Company
    userElement.querySelector('.popup__company--bs').value = user.company.bs;
    userElement.querySelector('.popup__company--catch-phrase').value = user.company.catchPhrase;
    userElement.querySelector('.popup__company--name').value = user.company.name;

    // append information about Account history

    const historyElements = userElement.querySelectorAll('.popup__history--element');
    const historyList = user.accountHistory;

    for (let i = 0; i<historyList.length ; i++) {
        historyElements[i].querySelector('.popup__history--account').value = historyList[i].account;
        historyElements[i].querySelector('.popup__history--amount').value = historyList[i].amount;
        historyElements[i].querySelector('.popup__history--business').value = historyList[i].business;
        historyElements[i].querySelector('.popup__history--date').value = historyList[i].date;
        historyElements[i].querySelector('.popup__history--name').value = historyList[i].name;
        historyElements[i].querySelector('.popup__history--type').value = historyList[i].type;
    }

    // append information about Posts

    const postsElements = userElement.querySelectorAll('.popup__post--element');
    const postsList = user.posts;

    for (let i = 0; i<postsList.length; i++) {
        postsElements[i].querySelector('.popup__posts--paragraph').value = postsList[i].paragraph;
        postsElements[i].querySelector('.popup__posts--sentence').value = postsList[i].sentence;
        postsElements[i].querySelector('.popup__posts--sentences').value = postsList[i].sentences;

        const wordsList = postsList[i].words;
        const wordsElements =  postsElements[i].querySelectorAll('.popup__posts--word');

        for (let j =0; j<wordsList.length; j++) {
            wordsElements[j].value = wordsList[j];
        }
    }

    
    const list = document.querySelector('#block');
    li.appendChild(userElement);
    list.appendChild(li);
    
    toggleButton(userElement);
    confirmSettings(userElement);
}

for (let i = 0; i<localStorage.length; i++) {
    generateCard(JSON.parse(localStorage.getItem(`${i}`)));
}