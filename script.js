const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');
const categorySelect = document.getElementById('categorySelect');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const category = categorySelect.value;
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <span class="category">${category}</span>
            <button class="deleteBtn">Delete</button>
        `;
        todoList.appendChild(listItem);
        taskInput.value = '';
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        e.target.parentElement.remove();
    }
});

categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => {
        const category = item.querySelector('.category').textContent;
        if (selectedCategory === 'all' || category === selectedCategory) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});