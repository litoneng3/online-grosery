import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
    const {id, title, img, price}= props.data;
    return (
        <div>
            <h3>this is product details</h3>
            <img src={img} alt=""/>
            <h4>name: {title}</h4>
            <h5>Price:$ {price}</h5>
            <Link to ={`product/${id}`}>
                <button className="btn btn-primary">Buy Now</button>
            </Link>
        </div>
    );
};

export default ProductDetails;