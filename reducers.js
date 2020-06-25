import {ADD_TODO, COMPLETE_TODO} from './actions';

const initialState = {
    todos: []
};


function todos(state=initialState.todos, action) {
    switch(action.type) {
        case ADD_TODO:

            return  [
                ...state,
                {
                    text: action.text,
                    complete: false
                }
               
            ]
        case COMPLETE_TODO:
            const todo = state.map((value, index) => {
                if (index === value.index) {
                    return {
                        ...state,
                        complete: true
                    }
                }
            });
            return todo;
        default:
            return state;
    }
}

export {todos};