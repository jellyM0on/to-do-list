import { format, compareAsc } from 'date-fns'
import addDays from 'date-fns/addDays'
import * as addList from './add-list'


const makeTask = (title, dueDate, priority, description) => {
    return { title, dueDate, priority, description }
};

function add(form){
    const formData = addList.getData(form);
    
}

