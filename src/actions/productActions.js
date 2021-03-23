import { ADD_PRODUCT, ADD_PRODUCT_SUCCE, ADD_PRODUCT_ERROR } from '../types';

//Create new products, and we call with useDispatch
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch( addProduct() );

        try {
            dispatch( addProductSucce(product) );
        } catch (error) {
            dispatch( addProductError(true) );
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

//If the product is saved in the database
const addProductSucce = product => ({
    type: ADD_PRODUCT_SUCCE,
    payload: product
})


//If there was an error. state take the state of error
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})