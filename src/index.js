import './index.css'
import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as DOM from './DOM-listinterface'
import * as DOMTI from './DOM-taskinterface'
import { allLists, makeList, changeAllList } from './add-list';
import { addCurrentDate } from './DOM-taskinterface';


//localStorage.removeItem('list')

DOMTI.addCurrentDate()

function defaultList(){
    const defaultList = makeList("Default List", "This is your first list!");
    allLists.push(defaultList); 
    DOM.makeListCard(); 
    DOM.listCardListener(); 
};


if (!localStorage.getItem('list')){
    DOM.addListBtn();
    defaultList(); 
} else {
    changeAllList(JSON.parse(window.localStorage.getItem('list')));
    DOM.addListBtn();
    DOM.makeInitialCards(); 
    DOM.initialCardListener(); 
};

