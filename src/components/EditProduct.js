import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditProduct = () => {

    //Product to edition
    const product = useSelector( state => state.products.editproduct );
    if( !product ) return null;
    const { name, price, id } = product;

    return ( 
        <div className="row justify-content-center">
             <div className="col-md-8">
                 <div className="card">
                     <div className="body">
                         <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                         </h2>

                         <form>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
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