import './index.css'
import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'


function getData(form){
    let valuesArr = []; 
    let formData = new FormData(form);
    for (const value of formData.values()){
        valuesArr.push(value); 
    };
    return valuesArr; 
};

const makeList = (title, taskList, finishedTasks, description) => {
    taskList = []; 
    finishedTasks = []; 
    return { title, taskList, finishedTasks, description }
};




export { makeList, getData }