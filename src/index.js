import './index.css'
import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as DOM from './DOM-listinterface'
import { allLists, makeList } from './add-list';

DOM.addListBtn();
defaultList(); 

function defaultList(){
const defaultList = makeList("Default List", "This is your first list!");
allLists.push(defaultList); 
DOM.makeListCard(); 
DOM.listCardListener(); 
};

// function populateStorage(){
//     localStorage.setItem()
// }
