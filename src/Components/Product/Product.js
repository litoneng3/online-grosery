import React from 'react';
import './Product.css';

const Product = (props) => {
    const { id, title, price, img } = props.data;

    return (
        <div className="card p-3 col-md-4 col-sm-12">
            <img src={img} alt="" />
            <h3>Name: {title}</h3>
            <h4>Price: $ {price}</h4>
            <button className="btn btn-primary btn-sm" onClick={() => props.handleAddProduct(props.data)}>Add Product</button>
        </div>
    );
};

export default Product;