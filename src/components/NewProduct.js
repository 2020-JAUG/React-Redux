import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; //useSelector accede al state dentro del componente
import { createNewProductAction } from '../actions/productActions'; //Actions Redux

 const NewProdcut = () => {

    //useDispatch executes the actions that we have in action
    const dispatch = useDispatch();

    //We call action from productActions
    const addProduct = () => dispatch( createNewProductAction() ); 

    //When the User do submit
    const submitNewProduct = e => {
        e.preventDefault();

        //Validate form

        //If there are no errors

        //Create the new product
        addProduct();


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
                                />     
                            </div> 

                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Product Precio"
                                    name="price"
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