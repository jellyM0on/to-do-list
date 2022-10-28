import './index.css'
import { format, compareAsc, getOverlappingDaysInIntervals } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'
import * as addTask from './add-task'
import * as DOMForm from './DOM-taskform'

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

        make('div', card, 'cardItemCount');
        make('div', card, 'cardFinishedCount'); 
       
        const cardDescription = make('div', card, null);
        cardDescription.textContent = index.description; 
        updateCardText();
        removeBtn(card);
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
    addRemoveAllBtn();
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
        const itemsContainer = make('div', taskList, 'item-container'); 
        itemsContainer.setAttribute('id', `list-item${i}`);
        const listItem = make('input', itemsContainer, 'list-item'); 
        const itemLabel = make('label', itemsContainer, 'list-item');
        listItem.setAttribute('type', 'checkbox'); 
        listItem.setAttribute('name', `list-item${i}`); 
        listItem.setAttribute('value', ''); 
        listItem.setAttribute('id', `list-item${i}`);
        itemLabel.setAttribute('id', `list-item${i}`);
        itemLabel.textContent = list[i].title; 
        make('button', itemsContainer, 'task-view-btn').textContent = 'View';
        make('button', itemsContainer, 'task-delete-btn').textContent = 'Remove'; 
        changePriorityColors(list[i].priority, itemLabel);
        viewItems(list[i]);
        removeTasks(itemsContainer); 
    };
    finishTaskListener();  
};

function addRemoveAllBtn(){
    const listPage = document.querySelector('.list-page');
    const removeTaskBtn = make('button', listPage, 'remove-finished-btn');
    removeTaskBtn.textContent = 'Remove All Finished Tasks from View'; 

    removeTaskBtn.addEventListener('click', () => {
        const tasks = document.querySelectorAll('.finished-task'); 
        tasks.forEach((task) => {
            const parentList = task.parentElement.parentElement;
            console.log(parentList); 
            const list = findList(parentList);
            const taskObj = findMatchCode(task.getAttribute('id'), list.taskList);
            const newArray = addTask.moveTaskFrom(taskObj, list.taskList);
            list.taskList = newArray; 
            console.log(list.taskList); 
            task.remove(); 
        });
        updateCardText(); 
    });
};


function removeTasks(taskContainer){
    const removeBtns = document.querySelectorAll('.task-delete-btn'); 
    const removeBtn = removeBtns[removeBtns.length-1];
    removeBtn.addEventListener('click', () => {
        const parentList = taskContainer.parentElement.parentElement;
        const list = findList(parentList);
        const task = findMatchCode(taskContainer.getAttribute('id'), list.taskList);
        const newArray = addTask.moveTaskFrom(task, list.taskList);
        list.taskList = newArray; 
        console.log(newArray); 
        taskContainer.remove();
        updateCardText(); 
    }); 
}; 

function viewItems(item){
    const viewBtns = document.querySelectorAll('.task-view-btn'); 
    const viewBtn = viewBtns[viewBtns.length-1]; 
    viewBtn.addEventListener('click', () => {
            DOMForm.makeForm(); 
            DOMForm.viewForm(item); 
            DOMForm.viewFormListener(item); 
        }); 
};

function changePriorityColors(itemPriority, item){
    switch(itemPriority){
        case ('High'): 
            item.setAttribute('style', 'background-color: red');
            break;
        case 'Medium':
            item.setAttribute('style', 'background-color: yellow');
            break;
        case 'Low': 
            item.setAttribute('style', 'background-color: green'); 
            break; 
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

    addTaskBtnn.addEventListener('click', () => {
        DOMForm.makeForm(); 
        DOMForm.addTaskListener(); 
    }); 
};


function findMatchCode(name, lists) {
    const names = lists.find(list => list.code == name); 
    return names; 
}; 

function finishTaskListener(){
    const checkBox = document.querySelectorAll("input[type=checkbox]"); 
    
    checkBox.forEach((box) => box.addEventListener('change', () => {
        const parentList = box.parentElement.parentElement.parentElement;
        const list = findList(parentList);
        const task = findMatchCode(box.getAttribute('id'), list.taskList);
        const fTask =  findMatchCode(box.getAttribute('id'), list.finishedTasks);

        if (box.checked){
            box.parentElement.classList.add('finished-task'); 
            list.taskList = addTask.moveTaskFrom(task, list.taskList); 
            list.finishedTasks = addTask.moveTaskTo(task, list.finishedTasks); 
            updateCardText();
        }
        else if(!box.checked){
            list.finishedTasks = addTask.moveTaskFrom(fTask, list.finishedTasks); 
            list.taskList = addTask.moveTaskTo(fTask, list.taskList); 
            updateCardText(); 
        }
    }));
};

function removeBtn(parent){
    const removeBtn = make('button', parent, 'remove-button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const newArray = addTask.moveTaskFrom(findList(parent), addList.allLists);
        addList.changeAllList(newArray); 
        const listPage = document.querySelector('.list-page')
        if(listPage){
            listPage.remove();
        };
        parent.remove(); 
    });
};



// add addTask button for every list. 
// can move task to other lists. move to that list's .taskList and change parentList

export { addListBtn, addTaskBtn, listCardListener, make, replacePage, updateCardText }


