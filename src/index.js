import './index.css'
import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as DOM from './DOM'


const sampledate = format(new Date(2020, 2, 12), 'MM/dd/yyyy');

DOM.addListBtn();
DOM.addTaskBtn(); 



//samples & tests 
// const makeList = (title, taskList, finishedTasks) => {
//     return { title, taskList, finishedTasks }
// }


// const makeTask = (title, dueDate, priority, description) => {
//     return { title, dueDate, priority, description }
// }

// let newlist = makeList("listname", [], []); 
// const newtask = makeTask("walk", sampledate, "", ""); 

// console.log(newlist); 
// console.log(newtask);
// console.log(newlist.taskList);

// const taskListArr = newlist.taskList
// taskListArr.push(newtask); 


// const newtask2 = makeTask("sleep", sampledate, "", ""); 
// taskListArr.push(newtask2); 
// console.log(newlist.taskList);

//newlist.taskList.push(newtask); 