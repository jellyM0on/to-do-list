import './index.css'
import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'

let allLists = []; 

function getData(form){
    let valuesArr = []; 
    let formData = new FormData(form);
    for (const value of formData.values()){
        valuesArr.push(value); 
    };
    return valuesArr; 
};

const makeList = (title, description, taskList, finishedTasks) => {
    taskList = []; 
    finishedTasks = []; 
    return { title, description, taskList, finishedTasks }
};

function add(form){
    const formData = getData(form);
    const list = makeList(formData[0], formData[1]); 
    allLists.push(list); 
}



export { makeList, getData, add, allLists }