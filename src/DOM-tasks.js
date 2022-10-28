import * as addList from './add-list'
import * as addTask from './add-task'
import * as DOM from './DOM-listinterface'
import * as DOMTI from './DOM-taskinterface'
import * as DOMForm from './DOM-taskform'

function makeListItems(parentList){
    const parentContainer = document.querySelector('.list-page'); 
    const taskList = DOM.make('div', parentContainer, 'list');
    const  list = parentList.taskList;

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
        DOM.make('button', itemsContainer, 'task-view-btn').textContent = 'View';
        DOM.make('button', itemsContainer, 'task-delete-btn').textContent = 'Remove'; 
        changePriorityColors(list[i].priority, itemLabel);
        viewItems(list[i]);
        removeTasks(itemsContainer); 
    };
    finishTaskListener();  
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
        const fTask = addList.findMatchCode(box.getAttribute('id'), list.finishedTasks);

        if (box.checked){
            box.parentElement.classList.add('finished-task'); 
            list.taskList = addTask.moveTaskFrom(task, list.taskList); 
            list.finishedTasks = addTask.moveTaskTo(task, list.finishedTasks); 
            DOM.updateCardText();
            addList.test();
        }
        else if(!box.checked){
            list.finishedTasks = addTask.moveTaskFrom(fTask, list.finishedTasks); 
            list.taskList = addTask.moveTaskTo(fTask, list.taskList); 
            DOM.updateCardText(); 
            addList.test();
        }
    }
    ));
};

function removeTasks(taskContainer){
    const removeBtns = document.querySelectorAll('.task-delete-btn'); 
    const removeBtn = removeBtns[removeBtns.length-1];
    removeBtn.addEventListener('click', () => {
        const parentList = taskContainer.parentElement.parentElement;
        const list = DOM.findList(parentList);
        const task = addList.findMatchCode(taskContainer.getAttribute('id'), list.taskList);
        const newArray = addTask.moveTaskFrom(task, list.taskList);
        list.taskList = newArray; 
        console.log(newArray); 
        taskContainer.remove();
        DOM.updateCardText(); 
        addList.test();
    }); 
}; 

function addRemoveAllBtn(){
    const listPage = document.querySelector('.list-page');
    const removeTaskBtn = DOM.make('button', listPage, 'remove-finished-btn');
    removeTaskBtn.textContent = 'Remove All Finished Tasks from View'; 

    removeTaskBtn.addEventListener('click', () => {
        const tasks = document.querySelectorAll('.finished-task'); 
        tasks.forEach((task) => {
            const parentList = task.parentElement.parentElement;
            console.log(parentList); 
            const list = DOM.findList(parentList);
            const taskObj = addList.findMatchCode(task.getAttribute('id'), list.taskList);
            const newArray = addTask.moveTaskFrom(taskObj, list.taskList);
            list.taskList = newArray; 
            console.log(list.taskList); 
            task.remove(); 
        });
        DOM.updateCardText(); 
        addList.test();
    });
};




export { makeListItems, addRemoveAllBtn }