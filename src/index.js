import './index.css'
import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as DOM from './DOM-listinterface'
import { allLists, makeList, changeAllList } from './add-list';

// DOM.addListBtn();
// defaultList(); 
//window.localStorage.removeItem('list');

function defaultList(){
    const defaultList = makeList("Default List", "This is your first list!");
    allLists.push(defaultList); 
    DOM.makeListCard(); 
    DOM.listCardListener(); 
};

// const defaulte = makeList("Default List", "This is your first list!");
// allLists.push(defaulte); 
// const defaultee = makeList("Default", "This is your first list!");
// allLists.push(defaultee); 
// console.log(allLists); 

if (!localStorage.getItem('list')){
    console.log('hi');
    DOM.addListBtn();
    defaultList(); 
} else {
    changeAllList(JSON.parse(window.localStorage.getItem('list')));
    DOM.makeInitialCards(); 
    DOM.initialCardListener(); 
};

