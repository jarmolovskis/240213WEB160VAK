let addTaskButton = document.getElementById('add-task');
let taskInputField = document.getElementById('task-input');
let taskList = document.getElementById('tasks');

let deleteButtons = document.querySelectorAll('ul#tasks li button');


addTaskButton.addEventListener('click', function(event) {

    event.preventDefault();

    if (taskInputField.value == '') {

        alert('Būtinai įveskite užduoties tekstą!');

        // Arba galima po alerto išeiti iš funkcijos, t.y. jos toliau nebevykdyti.
        // return;
        
    } else {

        let newLiElement = document.createElement('li');

        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');

        let newSpanElement = document.createElement('span');
        newSpanElement.innerText = taskInputField.value;

        let newDeleteButton = document.createElement('button');
        newDeleteButton.innerText = 'x';

        newDeleteButton.addEventListener('click', deleteTask);

        newLiElement.append(newCheckbox);
        newLiElement.append(newSpanElement);
        newLiElement.append(newDeleteButton);

        taskList.prepend(newLiElement);

        taskInputField.value = '';
    }
});


deleteButtons.forEach(function(deleteButton) {
    deleteButton.addEventListener('click', deleteTask);
});


function deleteTask(event) {
    event.target.parentElement.remove();
}
