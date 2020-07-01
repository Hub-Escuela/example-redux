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
            return state.map((state, index) =>
                index === action.index ? { ...state, complete: true } : state
              )
        default:
            return state;
    }
}

export {todos};