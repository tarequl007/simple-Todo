const todoBtn = document.querySelector('#addTodo');
const inputTodo = document.querySelector('#inputField');

todoBtn.addEventListener('submit', function() {
    // Basic validation

    if (inputTodo.value == '') {
        alert('Please Add Todo')
    }
})