document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            addTodoItem(todoText);
            todoInput.value = "";
        }
    });

    todoList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const li = event.target.parentElement;
            li.remove();
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        li.appendChild(removeButton);

        todoList.appendChild(li);
    }
});
