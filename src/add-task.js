import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'


const makeTask = (title, parentList, dueDate, priority, description, status, code ) => {
    const list = addList.findMatch(parentList, addList.allLists).taskList;
    code = `list-item${list.length}`; 
    status = 'unchecked';
    return { title, parentList, dueDate, priority, description, status, code }
};


function addT(form){
    const formData = addList.getData(form);
    const task = makeTask(formData[0], formData[1], formData[2], formData[3], formData[4]); 
    addTasktoList(task);
    addList.test(); 
};

function addTasktoList(task){
    const allLists = addList.allLists;
    const parentList = allLists.find(list => list.title == task.parentList);
    parentList.taskList.push(task); 
    parentList.allTasks.push(task); 
};

function validateTaskName(form){
    const formData = addList.getData(form);
    if(formData[0] == ''){
        alert("Empty Name");
        return false;
    } else{
        return true; 
    }
};

function moveTaskFrom(task, initial){
    const newInitial = initial.filter(item => item.code !== task.code);
    
    let newArray;
    if (!newInitial){
       return newArray = []; 
    } else {
        return newArray = newInitial; 
    }; 
};

function moveTaskTo(task, array){
    array.push(task);
    return array; 
}; 

function changeAllList(list){
    addList.allLists = list; 
}; 

export { makeTask, addT, addTasktoList, validateTaskName, moveTaskFrom, moveTaskTo }


