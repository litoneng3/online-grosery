import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';

const Review = () => {
    const [products, setProducts] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/ordered?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])


    return (
        <div className="col-md-6 col-sm-12">
            <h4>you have {products.length} products</h4>
            {
                products.map(pd => <li>{pd.email} |  CheckIn: {(new Date(pd.checkIn).toDateString('dd/MM/yyyy'))} | {pd.title} | {pd.price}</li>)
            }
        </div>
    );
};

export default Review;