import * as addList from './add-list'
import * as addTask from './add-task'
import * as DOM from './DOM-listinterface'
import * as DOMTI from './DOM-taskinterface'
import * as DOMTask from './DOM-tasks'
import * as DOMForm from './DOM-taskform'

function replacePage(card) {
    const listPage = document.querySelector('#task-interface');
    const present = document.querySelector('.list-page');
    const existingDropdown = document.querySelectorAll('.list-dropdown'); 

    if (listPage.lastElementChild == present){
        listPage.lastElementChild.remove(); 
        existingDropdown.forEach((dropdown) => dropdown.remove()); 
    }; 

    if (document.querySelector('.view-form')){
        DOMForm.removeForm(); 
    }; 

    makePage(card);
    addTaskBtn(); 
    DOMTask.addRemoveAllBtn();
};

function makePage(card){
    const listPage = document.querySelector('#task-interface');
    const page = DOM.make('div', listPage, 'list-page'); 

    const listInfo = DOM.findList(card); 
    page.setAttribute('id', `${listInfo.code}`);
    const pageTitle = DOM.make('div', page, 'to-do-list'); 
    pageTitle.textContent = listInfo.title; 
    DOMTask.makeListItems(listInfo);
};


function addTaskBtn() {
    const listPage = document.querySelector('.list-page');
    const addTaskBtnn = DOM.make('button', listPage, 'add-task');
    addTaskBtnn.textContent = "Add Task";

    addTaskBtnn.addEventListener('click', () => {
        DOMForm.makeForm(); 
        DOMForm.addTaskListener(); 
    }); 
};






export { replacePage }