import * as addList from './add-list'
import * as addTask from './add-task'
import * as DOM from './DOM-listinterface'
import * as DOMTI from './DOM-taskinterface'
import * as DOMForm from './DOM-taskform'
import removeImg from './icons/trash-can-outline.svg'
import viewImg from './icons/eye.svg'

function makeListItems(parentList){
    const parentContainer = document.querySelector('.list-page'); 
    const taskList = DOM.make('div', parentContainer, 'list');
    const list = parentList.allTasks;

    for (let i = 0; i < list.length; i++){
        const itemsContainer = DOM.make('div', taskList, 'item-container'); 
        itemsContainer.setAttribute('id', `list-item${i}`);
        const listItem = DOM.make('input', itemsContainer, 'list-item'); 
        const itemLabel = DOM.make('label', itemsContainer, 'list-item');
        listItem.setAttribute('type', 'checkbox'); 
        listItem.setAttribute('name', `list-item${i}`); 
        listItem.setAttribute('value', ''); 
        listItem.setAttribute('id', `list-item${i}`);
        itemLabel.setAttribute('id', `list-item${i}`);
        itemLabel.textContent = list[i].title; 
        DOM.make('div', itemsContainer, 'task-due').textContent = list[i].dueDate
        const viewBtn = DOM.make('button', itemsContainer, 'task-view-btn')
        DOM.make('img', viewBtn, null).setAttribute('src', viewImg)
        const removeBtn = DOM.make('button', itemsContainer, 'task-delete-btn')
        DOM.make('img', removeBtn, null).setAttribute('src', removeImg);
        makeChecks(list[i].status, listItem, itemsContainer); 
        changePriorityColors(list[i].priority, itemLabel);
        viewItems(list[i]);
        removeTasks(itemsContainer); 
    };
    finishTaskListener();  
};
function makeChecks(status, box, container){
    if(status == 'checked' && !container.classList.contains('finished-task')){
        box.checked = true;
        container.classList.add('finished-task');
    }
};



function changePriorityColors(itemPriority, item){
    switch(itemPriority){
        case ('High'): 
            item.classList.add('priority-high');
            break;
        case 'Medium':
            item.classList.add('priority-med')
            break;
        case 'Low': 
            item. classList.add('priority-low')
            break; 
    }; 
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

function finishTaskListener(){
    const checkBox = document.querySelectorAll("input[type=checkbox]"); 
    
    checkBox.forEach((box) => box.addEventListener('change', () => {
        const parentList = box.parentElement.parentElement.parentElement;
        const list = DOM.findList(parentList);
        const task = addList.findMatchCode(box.getAttribute('id'), list.taskList);

        if (box.checked){
            box.parentElement.classList.add('finished-task'); 
            task.status = 'checked'; 
            list.taskList = addTask.moveTaskFrom(task, list.taskList); 
            list.finishedTasks = addTask.moveTaskTo(task, list.finishedTasks); 
            DOM.updateCardText();
            addList.test();
        }
        else if(!box.checked){ 
            const fTask = addList.findMatchCode(box.getAttribute('id'), list.finishedTasks);
            if(box.parentElement.classList.contains('finished-task')){
                box.parentElement.classList.remove('finished-task');
            };
            list.finishedTasks = addTask.moveTaskFrom(fTask, list.finishedTasks); 
            list.taskList = addTask.moveTaskTo(fTask, list.taskList); 
            fTask.status = 'unchecked'; 
            DOM.updateCardText(); 
            addList.test();
        };
    }
    ));
};

function removeTasks(taskContainer){
    const removeBtns = document.querySelectorAll('.task-delete-btn'); 
    const removeBtn = removeBtns[removeBtns.length-1];
    removeBtn.addEventListener('click', () => {
        const parentList = document.querySelector('.list-page')
        const list = DOM.findList(parentList);
        const task = addList.findMatchCode(taskContainer.getAttribute('id'), list.taskList);
        const aTask = addList.findMatchCode(taskContainer.getAttribute('id'), list.allTasks);

        if (taskContainer.classList.contains('finished-task')){
            const fTask = addList.findMatchCode(taskContainer.getAttribute('id'), list.finishedTasks);
            const fAllNewArray = addTask.moveTaskFrom(aTask, list.allTasks);
            list.allTasks = fAllNewArray; 
            const fnewArray = addTask.moveTaskFrom(fTask, list.finishedTasks); 
            list.finishedTasks = fnewArray; 
             
        } else {
            const allNewArray = addTask.moveTaskFrom(aTask, list.allTasks);
            list.allTasks = allNewArray; 

            const newArray = addTask.moveTaskFrom(task, list.taskList);
            list.taskList = newArray; 
           
        }
        taskContainer.remove();
        DOM.updateCardText(); 
        addList.test();
    }); 
}; 

function addRemoveAllBtn(){
    const listPage = document.querySelector('.list-page')
    const removeTaskBtn = DOM.make('button', listPage, 'remove-finished-btn');
    removeTaskBtn.textContent = 'Remove All Finished Tasks'; 

    removeTaskBtn.addEventListener('click', () => {
        const parentList = DOM.findList(listPage); 

        parentList.finishedTasks.forEach((task) => {
            const newArray = addTask.moveTaskFrom(task, parentList.allTasks);
            parentList.allTasks = newArray; 
            console.log(parentList.finishedTasks); 
            console.log(parentList.allTasks); 
            addList.test();
        }); 
        parentList.finishedTasks = []; 
        const tasks = document.querySelectorAll('.finished-task');
        tasks.forEach((task) => {
            task.remove();
        });
        DOM.updateCardText(); 
        addList.test();
    });
};


export { makeListItems, addRemoveAllBtn }