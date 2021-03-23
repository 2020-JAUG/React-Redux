import { 
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCE,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCE,
    DOWNLOAD_PRODUCTS_ERROR
} from '../types';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

//Create new products, and we call with useDispatch
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            //Insert in API
            await clientAxios.post('/products', product); //This is to API

            //// If all goes well, update the status
            dispatch( addProductSucce(product) ); //This is to state

            //Alert
            Swal.fire(
                'Correct',
                'The product was added successfully',
                'Success'
            );
        } catch (error) {
            console.log(error);
            //But if there is an error, change the state
            dispatch( addProductError(true) );

            //Alert error
            Swal.fire({
                icon: 'error',
                title: 'There was a mistake',
                text: 'Something failed, try again'
            });
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

//Function to download the products from the data base
export function getProductsAction() {
    return async (dispatch) => {
        dispatch( downloadProducts() );
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
    
})

