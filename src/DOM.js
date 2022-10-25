import './index.css'
import { format, compareAsc, getOverlappingDaysInIntervals } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'

function make(element, parent, className) {
    const newElement = document.createElement(element);
    parent.appendChild(newElement); 
    newElement.classList.add(className); 
    return newElement; 
}

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
        const index = addList.allLists[addList.allLists.length - 1]; 
        const listContainer = document.querySelector('#list-interface');
        const card = make('div', listContainer, 'list-card');
        const cardHeader = make('div', card, null);
        cardHeader.textContent = index.title; 
        const cardItemCount = make('div', card, null);

        if (index.cardItemCount == undefined){
            cardItemCount.textContent = `0 List Items`;
        } else{
            cardItemCount.textContent = `${index.cardItemCount} List Items`;
        }
        
        if (index.cardUnfinishedCount == undefined){
            cardItemCount.textContent = `0 List Items`;
        } else{
            cardItemCount.textContent = `${index.cardUnfinishedCount} List Items`;
        }

        const cardUnfinishedCount = make('div', card, null); 
        const cardDescription = make('div', card, null);
        cardDescription.textContent = index.description; 
}; 









// for (let i = 0; i !== addList.allLists.length; i++) {


export { addListBtn }
