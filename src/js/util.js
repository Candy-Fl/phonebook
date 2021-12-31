
// founction for open settings form on button click 
const toggleButton = (item) => {
    const openButton=  item.querySelector('.popup__open');
    openButton.addEventListener('click', () => {
        item.classList.toggle ('popup__active');
    });

// config buttin to show address List

const addressButton = item.querySelector('.popup__address-button');
const addressList = item.querySelector('.popup__address');
addressButton.addEventListener('click', () => {
    addressList.classList.toggle ('popup__address--active');
    // Сохраняем данные в LocalStorage по id если произошли изменения 
})

const postsButton = item.querySelector('.popup__posts-button');
const postsList = item.querySelector('.popup__posts');
postsButton.addEventListener('click', () => {
    postsList.classList.toggle ('popup__posts--active');
    // Сохраняем данные в LocalStorage по id если произошли изменения 
})

//config button to show company List

const companyButton = item.querySelector('.popup__company-button');
const companyList = item.querySelector('.popup__company');
companyButton.addEventListener('click', () => {
    companyList.classList.toggle ('popup__company--active');
    // Сохраняем данные в LocalStorage по id если произошли изменения 
})

// config button to show hisory List
    const historyButton = item.querySelector('.popup__history-button');
    const historyList = item.querySelector('.popup__history');
    historyButton.addEventListener('click', () => {
        historyList.classList.toggle ('popup__history--active'); 
    })
}

// save changes and push it to LocalStorage

const confirmSettings = (item) => {
    const historyElements = item.querySelectorAll('.popup__history--element');
    const postsElements = item.querySelectorAll('.popup__post--element');
    const wordsElements = item.querySelectorAll('.popup__posts--word');
    const submitButton = item.querySelector('.popup__submit');
    submitButton.addEventListener('click', () => {
        // all information of card we will save to object
        const jsonArray = {
            "name" : item.querySelector('.popup__name').value,
            "username" : item.querySelector('.popup__userName').value,
            "email" : item.querySelector('.popup__email').value,
            "address" : {
                "city" : item.querySelector('.popup__address--city').value,
                "country" : item.querySelector('.popup__address--country').value,
                "geo" : {
                    "lat" : item.querySelector('.pop__geo--lat').value,
                    "lng" : item.querySelector('.pop__geo--lng').value,
                },
                "state" : item.querySelector('.popup__address--state').value,
                "streetA" : item.querySelector('.popup__address--street-a').value,
                "streetB" : item.querySelector('.popup__address--street-b').value,
                "streetC" : item.querySelector('.popup__address--street-c').value,
                "streetD" : item.querySelector('.popup__address--street-d').value,
                "zipcode" : item.querySelector('.popup__address--zipcode').value,
            },
            "avatar" : `${item.avatar}`,
            "phone" : item.querySelector('.popup__number').value,
            "email" : item.querySelector('.popup__email').value,
            "website" : item.querySelector('.popup__website').value,
            "favorite" : item.querySelector('.popup__favorite').checked,
            "company" : {
                "bs" : item.querySelector('.popup__company--bs').value,
                "catchPhrase" : item.querySelector('.popup__company--catch-phrase').value,
                "name" : item.querySelector('.popup__company--name').value,
            },
            "accountHistory" : [
                {
                    "account" : historyElements[0].querySelector('.popup__history--account').value,
                    "amount" : historyElements[0].querySelector('.popup__history--amount').value,
                    "business" : historyElements[0].querySelector('.popup__history--business').value,
                    "date" : historyElements[0].querySelector('.popup__history--date').value,
                    "name" : historyElements[0].querySelector('.popup__history--name').value,
                    "type" : historyElements[0].querySelector('.popup__history--type').value,
                },
                {
                    "account" : historyElements[1].querySelector('.popup__history--account').value,
                    "amount" : historyElements[1].querySelector('.popup__history--amount').value,
                    "business" : historyElements[1].querySelector('.popup__history--business').value,
                    "date" : historyElements[1].querySelector('.popup__history--date').value,
                    "name" : historyElements[1].querySelector('.popup__history--name').value,
                    "type" : historyElements[1].querySelector('.popup__history--type').value,
                },
                {
                    "account" : historyElements[2].querySelector('.popup__history--account').value,
                    "amount" : historyElements[2].querySelector('.popup__history--amount').value,
                    "business" : historyElements[2].querySelector('.popup__history--business').value,
                    "date" : historyElements[2].querySelector('.popup__history--date').value,
                    "name" : historyElements[2].querySelector('.popup__history--name').value,
                    "type" : historyElements[2].querySelector('.popup__history--type').value,
                },
            ],
            "posts" : [
                {
                "paragraph" : postsElements[0].querySelector('.popup__posts--paragraph').value,
                "sentence" : postsElements[0].querySelector('.popup__posts--sentence').value,
                "sentences" : postsElements[0].querySelector('.popup__posts--sentences').value,
                "words" : [
                    wordsElements[0].value,
                    wordsElements[1].value,
                    wordsElements[2].value,
                ]
                },
                {
                "paragraph" : postsElements[1].querySelector('.popup__posts--paragraph').value,
                "sentence" : postsElements[1].querySelector('.popup__posts--sentence').value,
                "sentences" : postsElements[1].querySelector('.popup__posts--sentences').value,
                "words" : [
                    wordsElements[3].value,
                    wordsElements[4].value,
                    wordsElements[5].value,
                ]
                },
                {
                    "paragraph" : postsElements[2].querySelector('.popup__posts--paragraph').value,
                    "sentence" : postsElements[2].querySelector('.popup__posts--sentence').value,
                    "sentences" : postsElements[2].querySelector('.popup__posts--sentences').value,
                    "words" : [
                        wordsElements[6].value,
                        wordsElements[7].value,
                        wordsElements[8].value,
                    ]
                }

            ],
            "id" : item.id,

        }
        localStorage.setItem(`${item.id}`, JSON.stringify(jsonArray));
        item.classList.toggle ('popup__active');
        
    })
}




export{toggleButton};
export{confirmSettings};