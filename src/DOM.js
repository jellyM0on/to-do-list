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

        const cardItemCount = make('div', card, 'cardItemCount');
        // if (index.cardItemCount == undefined){
        //     cardItemCount.textContent = `0 Tasks`;
        // } else{
        //     cardItemCount.textContent = `${index.cardItemCount} Tasks`;
        // }

        const cardUnfinishedCount = make('div', card, 'cardFinishedCount'); 
        // if (index.cardUnfinishedCount == undefined){
        //     cardUnfinishedCount.textContent = `0 Unfinished Tasks`;
        // } else{
        //     cardUnfinishedCount.textContent = `${index.cardUnfinishedCount} Unfinished Tasks`;
        // }

        const cardDescription = make('div', card, null);
        cardDescription.textContent = index.description; 
        updateCardText();
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

function addListtoSidebar(){
    const index = addList.allLists[addList.allLists.length - 1]; 
    const sideBar = document.querySelector('.sidebar-lists');
    const list = make('div', sideBar, 'sidebar-list'); 
    list.textContent = index.title; 
}; 

function listCardListener(){
    const cardList = document.querySelectorAll('.list-card');
    cardList[cardList.length-1].addEventListener('click', () => {
        replacePage(cardList[cardList.length-1])
    }); 
    

    // const cardSideBar = document.querySelectorAll('.sidebar-list'); 
    // cardSideBar.forEach((card) => card.addEventListener('click', () => {
    //     findList(card); 
    // }));
};

function replacePage(card) {
    const listPage = document.querySelector('#task-interface');
    const present = document.querySelector('.list-page');
    const existingDropdown = document.querySelectorAll('.list-dropdown'); 

    if (listPage.lastElementChild == present){
        listPage.lastElementChild.remove(); 
        existingDropdown.forEach((dropdown) => dropdown.remove()); 
    }; 

    makePage(card);
    addTaskBtn(); 
    addSelectionToForm(); 
};

function makePage(card){
    const listPage = document.querySelector('#task-interface');
    const page = make('div', listPage, 'list-page'); 

    const listInfo = findList(card); 
    page.setAttribute('id', `${listInfo.code}`);
    const pageTitle = make('div', page, 'to-do-list'); 
    pageTitle.textContent = listInfo.title; 
    makeListItems(listInfo);

};

function makeListItems(parentList){
    const parentContainer = document.querySelector('.list-page'); 
    const taskList = make('div', parentContainer, 'list');
    const  list = parentList.taskList; 

    for (let i = 0; i < list.length; i++){
        const listItem = make('input', taskList, 'list-item'); 
        const itemLabel = make('label', taskList, 'list-item');
        listItem.setAttribute('type', 'checkbox'); 
        listItem.setAttribute('name', `list-item${i}`); 
        listItem.setAttribute('value', ''); 
        listItem.setAttribute('id', `list-item${i}`);
        itemLabel.setAttribute('id', `list-item${i}`);
        itemLabel.textContent = list[i].title; 
    };
};

//move to add-list
function findList(card){ 
    const cardCode = card.getAttributeNode("id").value;
    const list = addList.allLists.find(list => list.code == cardCode); 
    return list; 
};

function addTaskBtn() {
    const listPage = document.querySelector('.list-page');
    const addTaskBtnn = make('button', listPage, 'add-task');
    addTaskBtnn.textContent = "Add Task";

    const addTaskForm = document.querySelector('#add-task-form'); 

    addTaskBtnn.addEventListener('click', () => {
        addTaskForm.setAttribute('style', 'display: block');
        console.log('sample')
    }); 
};

function taskFormListener(){
    const addTaskForm = document.querySelector('#add-task-form'); 
    addTaskForm.addEventListener('submit', function(event) {
        console.log(event.target); 
        event.preventDefault(); 
        addTaskForm.setAttribute('style', 'display: none');
        addTask.addT(event.target);
        const listPage = document.querySelector('.list-page');
        replacePage(listPage); 
        updateCardText(); 
        
    }); 
}; 

function addSelectionToForm(){
    const listSelector = document.querySelector('#task-list');

    for (let i = 0; i < addList.allLists.length; i++){
        const listOptions = make('option', listSelector,'list-dropdown');
        listOptions.setAttribute('value', addList.allLists[i].title);
        listOptions.textContent = addList.allLists[i].title; 
    };
};

function changePriority(){

};

function changeTaskCount(){

}; 

function finishTask(){

}

function removeElement(){

}

function editDetails(){

}


// add addTask button for every list. 
// can move task to other lists. move to that list's .taskList and change parentList

export { addListBtn, addTaskBtn, taskFormListener, listCardListener }


//submit in form bubbles up