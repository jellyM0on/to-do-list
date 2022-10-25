import './index.css'
import { format, compareAsc, getOverlappingDaysInIntervals } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'

function addListBtn() {
    const addListBtn = document.querySelector('#list-maker'); 
   const addListForm = document.querySelector('#add-list-form');
    addListBtn.addEventListener('click', () => {
        addListForm.setAttribute('style', 'display: block'); 

        addListForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        addList.getData(event.target);
        addListForm.setAttribute('style', 'display: none');
    })
 });
}; 








export { addListBtn }
