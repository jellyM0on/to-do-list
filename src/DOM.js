import './index.css'
import { format, compareAsc, getOverlappingDaysInIntervals } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'
import * as addTask from './add-task'

function make(element, parent, className) {
    const newElement = document.createElement(element);
    parent.appendChild(newElement); 
    newElement.classList.add(className); 
    return newElement; 
}

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
        makeListCard(); 
        addListtoSidebar(); 
        listCardListener(); 
    });
}; 

//split apart
function makeListCard(){
        const index = addList.allLists[addList.allLists.length - 1]; 
        const listContainer = document.querySelector('#list-interface');
        const card = make('div', listContainer, `list-card`);
        card.setAttribute('id', `code${addList.allLists.length - 1}`);
        const cardHeader = make('div', card, null);
        cardHeader.textContent = index.title; 

        const cardItemCount = make('div', card, null);
        if (index.cardItemCount == undefined){
            cardItemCount.textContent = `0 Tasks`;
        } else{
            cardItemCount.textContent = `${index.cardItemCount} Tasks`;
        }

        const cardUnfinishedCount = make('div', card, null); 
        if (index.cardUnfinishedCount == undefined){
            cardUnfinishedCount.textContent = `0 Unfinished Tasks`;
        } else{
            cardUnfinishedCount.textContent = `${index.cardUnfinishedCount} Unfinished Tasks`;
        }

        const cardDescription = make('div', card, null);
        cardDescription.textContent = index.description; 
}; 

function addListtoSidebar(){
    const index = addList.allLists[addList.allLists.length - 1]; 
    const sideBar = document.querySelector('.sidebar-lists');
    const list = make('div', sideBar, 'sidebar-list'); 
    list.textContent = index.title; 
}; 

function listCardListener(){
    const cardList = document.querySelectorAll('.list-card');
    cardList.forEach((card) => card.addEventListener('click', () => {
        removePage(); 
        makePage(card);
    }));

    const cardSideBar = document.querySelectorAll('.sidebar-list'); 
    cardSideBar.forEach((card) => card.addEventListener('click', () => {
        findList(card); 
    }));


};

function removePage(){
    const listPage = document.querySelector('#task-interface');
    const present = document.querySelector('.list-page');
    if (listPage.lastElementChild == present){
        listPage.lastElementChild.remove(); 
    }
}

function makePage(card){
    const listPage = document.querySelector('#task-interface');
    const page = make('div', listPage, 'list-page'); 

    const listInfo = findList(card); 
    const pageTitle = make('div', page, null); 
    pageTitle.textContent = listInfo.title; 
};

//move to add-list
function findList(card){ 
    const cardCode = card.getAttributeNode("id").value;
    const list = addList.allLists.find(list => list.code == cardCode); 
    return list; 
};


function addTaskBtn() {
    const addTaskBtn = document.querySelector('#add-task'); 
    const addTaskForm = document.querySelector('#add-task-form'); 
    addTaskBtn.addEventListener('click', () => {
        addTaskForm.setAttribute('style', 'display: block');
    }); 
    addTaskForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        addTask.addT(event.target);
        
    }); 
};


export { addListBtn, addTaskBtn }
