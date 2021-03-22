import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //useSelector accesses the state inside the component
import { createNewProductAction } from '../actions/productActions'; //Actions Redux

 const NewProdcut = () => {

    //State of component
    const [name, saveName] = useState('');
    const [price, savePrice] = useState(0);


    //useDispatch executes the actions that we have in action
    const dispatch = useDispatch();

    //We call action from productActions
    const addProduct = product => dispatch( createNewProductAction(product) );

    //When the User do submit
    const submitNewProduct = e => {
        e.preventDefault();

        //Validate form
        if(name.trim() === '' || price <= 0) {
            return;
        }
        //If there are no errors

        //Create the new product
        addProduct({
            name,
            price
        });


    }

     return ( 
         <div className="row justify-content-center">
             <div className="col-md-8">
                 <div className="card">
                     <div className="body">
                         <h2 className="text-center mb-4 font-weight-bold">
                             Add new Product
                         </h2>

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
                     </div>
                 </div>
             </div>
         </div>
      );
 }
  
 export default NewProdcut;