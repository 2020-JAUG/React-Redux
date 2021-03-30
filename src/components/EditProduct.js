import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    //State new of product
    const [ product, saveProduct ] = useState({
        name: '',
        price: ''
    });

    //Product to edition
    const editproduct = useSelector( state => state.products.editproduct );
    
    //Fill the state automatically
    useEffect( () => {
        saveProduct(editproduct);
    }, [editproduct]);

    //Read the form data
    const onChangeForm = e => {
        saveProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const { name, price } = product;

    const submitEditProduct = e => {
        e.preventDefault();

       dispatch( editProductAction(product) );

       history.push('/')
    }

    return ( 
        <div className="row justify-content-center">
             <div className="col-md-8">
                 <div className="card">
                     <div className="body">
                         <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                         </h2>

                         <form onSubmit={submitEditProduct}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={onChangeForm}
                                />     
                            </div> 

                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Product Precio"
                                    name="price"
                                    value={price}
                                    onChange={onChangeForm}
                                />     
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-bolock w-100"
                                >Save Changes</button> 
                         </form>
                     </div>
                 </div>
             </div>
         </div>
    );
}
 
export default EditProduct;