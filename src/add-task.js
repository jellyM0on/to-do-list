import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'


const makeTask = (title, dueDate, priority, description, parentList) => {
    parentList = ''; 
    return { title, dueDate, priority, description, parentList }
};

function addT(form){
    const formData = addList.getData(form);
    const task = makeTask(formData[0], formData[1], formData[2], formData[3]); 
}

function addTasktoList(){

}

export { makeTask, addT }


