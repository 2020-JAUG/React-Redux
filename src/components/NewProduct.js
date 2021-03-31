import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //useSelector accesses the state inside the component
import { createNewProductAction } from '../actions/productActions'; //Actions Redux
import { showAlert, hideAlertAction } from '../actions/alertActions';

 const NewProduct = ( {history} ) => {

    //State of component
    const [name, saveName] = useState('');
    const [price, savePrice] = useState(0);

    //useDispatch executes the actions that we have in action
    const dispatch = useDispatch();

    //Access store status
    const loading = useSelector( state => state.products.loading );
    const error = useSelector( state=> state.products.error );
    const alert = useSelector( state => state.alert.alert );

    //We call action from productActions
    const addProduct = product => dispatch( createNewProductAction(product) );

    //When the User do submit
    const submitNewProduct = e => {
        e.preventDefault();
 
        //Validate form
        if(name.trim() === '' || price <= 0) {

            const alert = {
                msg: 'Both fields are required',
                class: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch( showAlert(alert) );

            return;
        }
        //If there are no errors

        dispatch( hideAlertAction() );

        //Create the new product
        addProduct({
            name,
            price
        });

        //Redirect
        history.push('/');
    }

     return ( 
         <div className="row justify-content-center">
             <div className="col-md-8">
                 <div className="card">
                     <div className="body">
                         <h2 className="text-center mb-4 font-weight-bold">
                             Add new Product
                         </h2>

                        { alert ? <p className={alert.class}> {alert.msg} </p> : null }

                         <form
                            onSubmit={submitNewProduct}
                         >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={e => saveName(e.target.value)}
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
                                    onChange={e => savePrice( Number(e.target.value) )}
                                />     
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-bolock w-100"
                                >Add</button> 
                         </form>

                         { loading ? <p>Loading...</p> : null }

                         { error ? <p className="alert alert-danger p2 mt-4 text-center">There was a mistake</p> : null }
                     </div>
                 </div>
             </div>
         </div>
      );
 }
  
 export default NewProduct;