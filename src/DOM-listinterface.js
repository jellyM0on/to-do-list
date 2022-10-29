import './index.css'
import { format, compareAsc, getOverlappingDaysInIntervals } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'
import * as addTask from './add-task'
import * as DOMForm from './DOM-taskform'
import * as DOMTI from './DOM-taskinterface'
import removeImg from './icons/trash-can-outline.svg'

function make(element, parent, className) {
    const newElement = document.createElement(element);
    parent.appendChild(newElement); 
    newElement.classList.add(className); 
    return newElement; 
}; 

function addListBtn() {
    const addListBtn = document.querySelector('#list-maker'); 
    const addListForm = document.querySelector('#add-list-form');
    addListBtn.addEventListener('click', () => {
        addListForm.setAttribute('style', 'display: block'); 
    });
    addListForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        addListForm.setAttribute('style', 'display: none');
        addList.add(event.target);
        addList.renew();
        makeListCard(); 
        listCardListener(); 
    });
    DOMForm.closeBtnListener();  
}; 

//split apart
function makeListCard(){
        const index = addList.allLists[addList.allLists.length - 1]; 
        const listContainer = document.querySelector('#list-interface');
        const card = make('div', listContainer, `list-card`);
        card.setAttribute('id', `code${addList.allLists.length - 1}`);
        const cardHeader = make('div', card, null);
        cardHeader.textContent = index.title; 

        make('div', card, 'cardItemCount');
        make('div', card, 'cardFinishedCount'); 
       
        const cardDescription = make('div', card, null);
        cardDescription.textContent = index.description; 
        updateCardText();

        if(addList.allLists.length !== 1){
            removeBtn(card);
        }
}; 

function makeInitialCards(){
    addList.allLists.forEach((list) => {
        const listContainer = document.querySelector('#list-interface');
        const card = make('div', listContainer, `list-card`);
        card.setAttribute('id', `code${addList.allLists.indexOf(list)}`);
        const cardHeader = make('div', card, null);
        cardHeader.textContent = list.title; 

        make('div', card, 'cardItemCount');
        make('div', card, 'cardFinishedCount'); 
       
        const cardDescription = make('div', card, null);
        cardDescription.textContent = list.description; 
        updateCardText();
        if(addList.allLists.indexOf(list) !== 0){
            removeBtn(card);
        };
        
    });
};

function updateCardText() {
    const card = document.querySelectorAll('.list-card'); 

    card.forEach((card) => {
        const itemCount = document.querySelectorAll('.cardItemCount');
        const fItemCount = document.querySelectorAll('.cardFinishedCount');
        const list = findList(card); 

        let itemDiv;
        let fItemDiv; 

        itemCount.forEach((item) => {
            if (item.parentNode == card){
                itemDiv = item; 
            };
        }); 

        fItemCount.forEach((item) => {
            if (item.parentNode == card){
                fItemDiv = item; 
            }; 
        }); 
        itemDiv.textContent = `${list.taskList.length} Tasks`
        fItemDiv.textContent = `${list.finishedTasks.length} Finished Tasks`
    }); 
};

function listCardListener(){
    const cardList = document.querySelectorAll('.list-card');
    cardList[cardList.length-1].addEventListener('click', () => {
        DOMTI.replacePage(cardList[cardList.length-1])
    }); 
};

function initialCardListener(){
    const cardList = document.querySelectorAll('.list-card');
    cardList.forEach((card) => card.addEventListener('click', () => {
        DOMTI.replacePage(card); 
    }))
}


function removeBtn(parent){
    const removeBtn = make('button', parent, 'remove-button');
    make('img', removeBtn, null).setAttribute('src', removeImg )
    removeBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const newArray = addTask.moveTaskFrom(findList(parent), addList.allLists);
        addList.changeAllList(newArray); 
        addList.test();
        const listPage = document.querySelector('.list-page')
        if(listPage){
            listPage.remove();
        };
        parent.remove(); 
    });
};

//move to add-list
function findList(card){ 
    const cardCode = card.getAttributeNode("id").value;
    const list = addList.allLists.find(list => list.code == cardCode); 
    return list; 
};

export { addListBtn, listCardListener, make, updateCardText, makeListCard, findList, makeInitialCards, initialCardListener }


