import './index.css'
import { format, compareAsc, getOverlappingDaysInIntervals } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'

function addListBtn() {
    const addListBtn = document.querySelector('#list-maker'); 
   const addListForm = document.querySelector('#add-list-form');
    addListBtn.addEventListener('click', () => {
        addListForm.setAttribute('style', 'display: block'); 
    });
        addListForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        addListForm.setAttribute('style', 'display: none');
        addList.add(event.target);
        makeListCard(); 
    });
}; 

function makeListCard(){
        const listContainer = document.querySelector('#list-interface');
        const card = document.createElement('div')
        listContainer.appendChild(card); 
        card.classList.add('list-card'); 
        return; 
}; 







// for (let i = 0; i !== addList.allLists.length; i++) {


export { addListBtn }
