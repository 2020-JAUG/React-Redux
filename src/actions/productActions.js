import { ADD_PRODUCT, ADD_PRODUCT_SUCCE, ADD_PRODUCT_ERROR } from '../types';
import clientAxios from '../config/axios';

//Create new products, and we call with useDispatch
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            //Insert in API
            await clientAxios.post('/products', product)
            //// If all goes well, update the status
            dispatch( addProductSucce(product) );

        } catch (error) {
            console.log(error);
            //But if there is an error, change the state
            dispatch( addProductError(true) );
        }
    }
}
//We define the functions and put the types
const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

//If the product is saved in the database and modificate the state
const addProductSucce = product => ({
    type: ADD_PRODUCT_SUCCE,
    payload: product
});

//If there was an error. state take the state of error
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});