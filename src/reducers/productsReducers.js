import { 
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCE,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCE,
    DOWNLOAD_PRODUCTS_ERROR
} from '../types';

//Cada reducers tiene su propio started
const initialState = {
    products: [],
    error: null,
    loading: false
}
//Here we evaluate the functions of actions
// eslint-disable-next-line import/no-anonymous-default-export
export default function( state = initialState, action ) {
    switch(action.type) {
        case START_DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:
            return { ...state, loading: action.payload }

        case ADD_PRODUCT_SUCCE:
            return { ...state, loading: false, products: [...state.products, action.payload] }

        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
            return { ...state, loading: false, error: action.payload }

        case DOWNLOAD_PRODUCTS_SUCCE:
            return { ...state, loading: false, error: null, products: action.payload }   

        default:
            return state;
    }
}