import {createStore} from 'redux';
import {addTodo, completeTodo} from './actions.js';
import {todos} from './reducers.js'


const store = createStore(todos)

const form = document.querySelector('.todo-form');

store.dispatch(addTodo('todo 1'));
store.dispatch(addTodo('todo 2'));
store.dispatch(addTodo('dodo 3'));

store.dispatch(completeTodo(0));

console.log(store.getState());


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = document.querySelector('#todo').value;
    
    store.dispatch(addTodo(todo));
    addTodoToUI(todo);

})

const addTodoToUI = (todo) => {
    const todoList =document.querySelector('.todo-list');
    todoList.insertAdjacentHTML('beforeend', `<li>${todo}</li>`)
}


