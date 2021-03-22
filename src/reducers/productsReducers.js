import { createStore, applyMiddleware, compose } from 'redux'; //Con applyMiddleware pasamos thunk y lo agrega al store
import thunk from 'redux-thunk';

//Cada reducers tiene su propio started
const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function( state = initialState, action ) {
    switch(action.type) {
        default:
            return state;
    }
}