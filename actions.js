const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    }
}

export {ADD_TODO, COMPLETE_TODO, addTodo, completeTodo};