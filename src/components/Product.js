import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
//REDUX
import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEdit } from '../actions/productActions';

const Product = ( {product} ) => {
    const { name, price, id } = product;

    const dispatch = useDispatch();
    const history = useHistory();

    //Confirm you want to delete it
    const confirmDeleteProduct = id => {
        
        //Ask the user
        Swal.fire({
            title: '¿Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Yes, delete it!',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
            //Take it into action
            dispatch( deleteProductAction(id) );
            }
        });
    }

    //Function that redirects on a scheduled basis
    const edition = product => {
        dispatch( getProductEdit(product) );
        history.push( `/products/edit/${product.id}` )
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> {price} € </span></td>
            <td className="actions">
                <button type="button" onClick={ () => edition(product) } className="btn btn-primary mr-2"> Edit </button>
                <button type="button" className="btn btn-danger" onClick={ () => confirmDeleteProduct(id) }> Delete </button>
            </td>
        </tr>
    )
}
 
export default Product;