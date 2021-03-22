import { ADD__PRODUCT, ADD_PRODUCT_SUCCE, ADD_PRODUCT_ERROR } from '../types';

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