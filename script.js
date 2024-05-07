document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskTableBody = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const time = getCurrentTime();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${taskText}</td>
                <td>${time}</td>
                <td><button class="deleteBtn"><i class="fas fa-trash-alt"></i></button></td>
                <td><input type="checkbox" class="markDoneCheckbox"></td>
            `;
            taskTableBody.appendChild(row);
            taskInput.value = '';
        }
    });

    taskTableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('deleteBtn')) {
            event.target.closest('tr').remove();
        } else if (event.target.classList.contains('markDoneCheckbox')) {
            const taskRow = event.target.closest('tr');
            if (event.target.checked) {
                taskRow.classList.add('completed');
            } else {
                taskRow.classList.remove('completed');
            }
        }
    });

    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
});
