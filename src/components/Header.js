import React from 'react';
import { Link } from 'react-router-dom';
 
const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-drak bg-primary justify-content-betwwen">
            <div className="container">
                <h1>
                    <Link to={'/'} className="text-light">
                        CRUD - React, Redux, REST API & Axios
                    </Link>
                </h1>
            </div>

            <Link to={"/products/new"}
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Add Product &#43;</Link>

        </nav>
     );
}
 
export default Header;