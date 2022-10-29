import './index.css'
import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'

let allLists = []; 

function test(){
    window.localStorage.setItem('list', JSON.stringify(allLists));
}; 

function getData(form){
    let valuesArr = []; 
    let formData = new FormData(form);
    for (const value of formData.values()){
        valuesArr.push(value); 
    };
    return valuesArr; 
};

function findMatch(name, lists) {
    const names = lists.find(list => list.title == name); 
    return names; 
}; 

function findMatchCode(name, lists) {
    const names = lists.find(list => list.code == name); 
    return names; 
}; 

function titleNameValidation(title){
    if(title == ''){
        return title = `List ${allLists.length}`
    } else if(findMatch(title, allLists)) {
        console.log(title); 
        return title = `${title} (List ${allLists.length})`
    }else{
        return title;
    };
};

const makeList = (title, description, taskList, finishedTasks, code) => {
    title = titleNameValidation(title);
    taskList = []; 
    finishedTasks = []; 
    code = `code${allLists.length}`;
    return { title, description, taskList, finishedTasks, code }
};

function add(form){
    const formData = getData(form);
    const list = makeList(formData[0], formData[1]); 
    allLists.push(list); 
    test(); 
};

function renew(form){
    const formData = getData(form);
    formData[0] = ''; 
    formData[1] = '';
}

function changeAllList(list){
    allLists = list; 
}; 


export { test, makeList, getData, add, allLists, findMatch, changeAllList, findMatchCode, renew }