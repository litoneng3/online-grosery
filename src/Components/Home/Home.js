import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import ProductDetails from '../ProductDetails/ProductDetails';


const Home = () => {
    const [productInfo, setProductInfo] = useState([]);
    const [products, setProducts]= useState([]);

    useEffect(() => {
        fetch('https://peaceful-mesa-44182.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setProductInfo(data)
            })
    }, [])

    const handleAddProduct = (id) => {
        const data = [...products, id];
        setProducts(data);
    }
    return (
        <div>
            <div>
                {
                    products.map(td => <ProductDetails data={td}></ProductDetails>)
                }
            </div>
            <div className="row">
                {
                    productInfo.map(td => <Product data={td} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;