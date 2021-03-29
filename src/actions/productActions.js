import { 
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCE,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCE,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCE,
    REMOVE_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    EDIT_PRODUCT_SUCCE,
    EDIT_PRODUCT_ERROR
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
export function getProductsAction() { //Note getProductsAction, run the function wownloadProducts
    return async (dispatch) => {
        dispatch( downloadProducts() );

        try {
            const aswer = await clientAxios.get('/products');
            dispatch( downloadProductsSucce(aswer.data) )//Put dispatch if the call is succe
        } catch (error) {
            console.log(error)
            dispatch( downloadProductsError() )
        }
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
    
});

const downloadProductsSucce = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCE,
    payload: products
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});

//Select and delete the product
export function deleteProductAction (id) {
    return async (dispatch) => { 
        dispatch(getProductDelete(id) ); 
        
        try {
            await clientAxios.delete( `/products/${id}` );
            dispatch( removeProductSucce() );

            //If it is eliminated show alert
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch( removeProductError() );
            
        }
    }
}

const getProductDelete = id => ({
    type: GET_REMOVE_PRODUCT,
    payload: id
});

const removeProductSucce = () => ({
    type: REMOVE_PRODUCT_SUCCE
});

const removeProductError = () => ({
    type: REMOVE_PRODUCT_ERROR,
    payload: true
});

//Put product on edition
export function getProductEdit(product) {
    return(dispatch) => {
        dispatch( getProductEditAction(product) );
    }
}

const getProductEditAction = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})