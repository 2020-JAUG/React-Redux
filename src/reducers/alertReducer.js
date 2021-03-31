import { SHOW_ALERT, HIDE_ALERT } from '../types';

//Each reduce has its status
const initialState = {
    alert: null
}

export default function( state = initialState, action ) {
    switch(action.type) {
        default:
            return state;
    }
}