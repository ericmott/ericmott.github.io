import {
    TodoItem
} from './todoItem.js';

let todoItems = [];

if (localStorage.getItem("todoItems")) {
    console.log("local file found");
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
    loadTodoItems();
}

/* this is required when using module */
window.addItem = addItem;

/* add new task to list */
function addItem() {
    /* check to see if the task field is empty */
    if (document.getElementById('task').value == '') {
        console.log("Can't save an empty task!");
        return;
    }
    /* create new todo object */
    const newTodoItem = new TodoItem(
        // document.getElementById('completed').checked,
        document.getElementById('completed').checked = false, // set checkbox as unchecked
        document.getElementById('task').value
    );

    /* add new task to end of todoItems string */
    todoItems.push(newTodoItem);

    /* save to local storage */
    saveTodoItems(todoItems);

    /* fill table */
    loadTodoItems();

    /* clear form */
    clearFields();
}

/* clear input fields */
function clearFields() {
    document.querySelector('#task').value = '';
}

/* clears table before refreshing with updated data */
function clearTodoItems() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

/* delete task */
function deleteItem(todoItem) {
    let pos = todoItems.indexOf(todoItem);

    if (pos < 0) {
        return;
    }

    /* removes selected item from todo string */
    todoItems.splice(pos, 1);

    /* save to local storage */
    saveTodoItems(todoItems);

    /* fill table */
    loadTodoItems();
}

function toggleCheck(todoItem) {

    /* Toggle checkbox in memory */
    if (todoItem.completed) {
        todoItem.completed = false;
    } else {
        todoItem.completed = true;
    }

    /* save to local storage */
    saveTodoItems(todoItems);

    /* fill table */
    loadTodoItems();
}

function loadTodoItems() {

    /* clear table for refresh */
    clearTodoItems();

    /* add each item to the table */
    todoItems.forEach(
        // (todoItem) => {
        //     document.querySelector('tbody').innerHTML +=
        //     `<tr>
        //         <td>${ todoItem.checked }</td>
        //         <td>${ todoItem.task }</td>
        //     </tr>`;
        // }
        (todoItem) => {
            // *** create table row ***
            let tr = document.createElement('tr');
            // *** create checkbox in table ***
            let tdChkBox = document.createElement('input');
            tdChkBox.type = "checkbox";
            tdChkBox.name = "completed";
            tdChkBox.id = "completed";
            tdChkBox.checked = todoItem.completed;
            tdChkBox.addEventListener('click', toggleCheck.bind(null, todoItem), false);

            let tdTask = document.createElement('td');
            let tdEdit = document.createElement('td');
            
            tdTask.textContent = todoItem.task;

            let aDelete = document.createElement('a');
            aDelete.addEventListener('click', deleteItem.bind(null, todoItem), false);
            aDelete.textContent = 'Delete';  // *** How did I replace this text with my image for a button? ***

            // **** trying to figure out how use my image for the delete button ******
            // aDelete.textContent = <img src="./images/delete-button.png" alt="Delete" width="150" height="150" title="Delete"></img>;
            // aDelete.hasAttribute = '<img src="./images/delete-button.png" alt="Delete" width="150" height="150" title="Delete">';

            tdEdit.appendChild(aDelete);

            tr.appendChild(tdChkBox);
            tr.appendChild(tdTask);
            tr.appendChild(tdEdit);

            document.querySelector('tbody').appendChild(tr);  
        }
    );
}

function saveTodoItems(todoItems) {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}