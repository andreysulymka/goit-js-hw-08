import throttle from 'lodash.throttle';

const STORAGE_KEY = 'fedback-form-state';
let localObject = {};

const feedBackForm = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textAreaRef = document.querySelector('textarea');


feedBackForm.addEventListener('submit', submitForm);
feedBackForm.addEventListener('input', throttle(onFormWriting, 500))

function onFormWriting (evt){
    localObject[evt.target.name] = evt.target.value;    
    const stringifiedData = JSON.stringify(localObject);
    localStorage.setItem(STORAGE_KEY, stringifiedData)
}

populateMessage();

function submitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(localObject)
 };

function populateMessage() {
    if (localStorage.getItem(STORAGE_KEY)) {
        localObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
    };
    for(let key in localObject){feedBackForm.elements[key].value =localObject[key]}
}



