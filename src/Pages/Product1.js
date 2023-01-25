// const Product1 = () => (
//   <div>Product1</div>
// );
// export default Product1;

import React, { useState } from 'react';

const ProductIDGenerator = () => {
    const [productID, setProductID] = useState("");

    const generateID = () => {
        setProductID(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }
    return (
        <div>
            <button onClick={generateID}>Generate Product ID</button>
            <p>Product ID: {productID}</p>
        </div>
    );
}
export default ProductIDGenerator;

