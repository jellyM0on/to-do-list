import * as addList from './add-list'
import * as addTask from './add-task'
import * as DOM from './DOM'

function makeFormElements(element, parent, type, name, id){
    const newElement = document.createElement(element);
    parent.appendChild(newElement); 
    //newElement.classList.add(className); 
    newElement.setAttribute('id', `${id}`);
    newElement.setAttribute('name', `${name}`); 
    newElement.setAttribute('type', `${type}`)
    return newElement; 
}; 

function addFormLabels(parent, id, text){
    const taskDateLabel = DOM.make('label', parent, null)
    taskDateLabel.setAttribute('for', id);
    taskDateLabel.textContent = text;
}; 

function makeFormDropdowns(data, parent, type){
    for (let i = 0; i < data.length; i++){
        const listOptions = DOM.make('option', parent, `${type}-dropdown`);
        if (data == addList.allLists){
            listOptions.setAttribute('value', data[i].title);
            listOptions.textContent = data[i].title; 
        } else {
            listOptions.setAttribute('value', data[i]);
            listOptions.textContent = data[i]; 
        }; 
    };
}; 

function makeForm(){
    const contentWindow = document.querySelector('#content');
    const viewForm = DOM.make('form', contentWindow, 'view-form'); 
    viewForm.setAttribute('id', 'add-task-form'); 

    const closeBtn = DOM.make('button', viewForm, 'form-close-btn');
    closeBtn.textContent = 'X';
    closeBtnListener(); 
    

    DOM.make('label', viewForm, null).setAttribute('for', 'task-title'); 
    const taskTitle = makeFormElements('input', viewForm, 'text', 'task-title', 'task-title'); 
    taskTitle.setAttribute('placeholder', 'Task Name...')

    addFormLabels(viewForm, 'task-list', 'List:');
    const taskList = DOM.make('select', viewForm, null)
    taskList.setAttribute('id', 'task-list'); 
    taskList.setAttribute('name', 'task-list'); 
    makeFormDropdowns(addList.allLists, taskList, 'list');
    
    addFormLabels(viewForm, 'task-date', 'Due Date:');
    makeFormElements('input', viewForm, 'date', 'task-date', 'task-date'); 
    
    addFormLabels(viewForm, 'task-list', 'Priority:');
    let priorities = ['--', 'High', 'Medium', 'Low'];
    const taskPriority = DOM.make('select', viewForm, null);
    taskPriority.setAttribute('id', 'task-priority'); 
    taskPriority.setAttribute('name', 'task-priority'); 
    makeFormDropdowns(priorities, taskPriority, 'priority'); 
    
    addFormLabels(viewForm, 'task-description', 'Description:')
    const taskDescrip = DOM.make('textarea', viewForm, null);
    taskDescrip.setAttribute('name', 'task-description');
    taskDescrip.setAttribute('id', 'task-description');
    taskDescrip.setAttribute('cols', 30);
    taskDescrip.setAttribute('rows', 4); 
    
    const submitBtn = DOM.make('button', viewForm, 'view-form-submit'); 
    submitBtn.setAttribute('type', 'submit'); 
    submitBtn.textContent = 'Submit'
};

function removeForm(){
    const form = document.querySelector('#add-task-form'); 
    form.remove(); 
};

function addTaskListener(){
    const taskForm = document.querySelector('#add-task-form'); 
    taskForm.addEventListener('submit', function(event) {
        console.log(event.target); 
        event.preventDefault(); 
        if (addTask.validateTaskName(event.target) == true) {
        addTask.addT(event.target);
        const listPage = document.querySelector('.list-page');
        console.log(listPage); 
        DOM.replacePage(listPage); 
        DOM.updateCardText(); 
        removeForm(); 
        };
    }); 
}; 

function viewForm(task){
    setExistingValues('#task-title', task.title);
    setExistingValues('#task-list', task.parentList); 
    setExistingValues('#task-date', task.dueDate); 
    setExistingValues('#task-priority', task.priority); 
    const description = document.querySelector('#task-description'); 
    description.textContent = task.description; 
};

function setExistingValues(id, value){
    const element = document.querySelector(id); 
    element.setAttribute('value', `${value}`)
};

function viewFormListener(task){
    const taskForm = document.querySelector('#add-task-form');
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const form = addList.getData(event.target);
        console.log(task.title);
        task.title = form[0]; 
        task.parentList = form[1];
        task.dueDate = form[2];
        task.priority = form[3];
        task.description = form[4]; 
        removeForm(); 

        const cardList = document.querySelectorAll('.list-card');
        DOM.replacePage(cardList[cardList.length-1]);
    });
};

function closeBtnListener(){
    const closeBtn = document.querySelectorAll('.form-close-btn');
    const addListForm = document.querySelector('#add-list-form');
    closeBtn.forEach((button) => button.addEventListener('click', (event) => {
        event.preventDefault(); 
        if (button.parentElement.getAttributeNode('id').value == 'add-task-form'){
            removeForm(); 
        } else {
            addListForm.setAttribute('style', 'display: none');
        };
    }));
};



export { makeForm, removeForm, addTaskListener, viewForm, viewFormListener, closeBtnListener }

