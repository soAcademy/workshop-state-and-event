import React, { useState } from 'react';

const ProductShowcase = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' }
    ]);

    return (
        <div>
            <h1>Product Showcase</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductShowcase;
