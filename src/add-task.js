import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'


const makeTask = (title, parentList, dueDate, priority, description ) => {

    return { title, parentList, dueDate, priority, description }
};

function addT(form){
    const formData = addList.getData(form);
    const task = makeTask(formData[0], formData[1], formData[2], formData[3], formData[4]); 
    addTasktoList(task);
    console.log(addList.allLists); 
};

function addTasktoList(task){
    const allLists = addList.allLists
    const parentList = allLists.find(list => list.title == task.parentList);
    parentList.taskList.push(task); 
};

export { makeTask, addT, addTasktoList }


