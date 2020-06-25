import {createStore} from 'redux';
import {addTodo, completeTodo} from './actions.js';
import {todos} from './reducers.js'


const store = createStore(todos)

console.log(store.getState());


store.dispatch(addTodo('Aprender sobre acciones'));
store.dispatch(addTodo('Aprender sobre reducers'));
store.dispatch(addTodo('Aprender sobre stores'));

console.log(store.getState());