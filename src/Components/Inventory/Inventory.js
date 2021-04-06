import React from 'react';


const Inventory = () => {

    const handleAddProducts = () => {
        const products= {};
        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>Name: </span><input type="text"/></p>
                <p><span>Price: </span><input type="text"/></p>
                <p><span>Quantity: </span><input type="text"/></p>
                <p><span>Upload Image: </span><input type="file"/></p>
                
                <button onClick={handleAddProducts}>Add Products</button>
            </form>
            
        </div>
    );
};

export default Inventory;