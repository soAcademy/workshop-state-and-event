import { Link } from "react-router-dom"

const ProductPage = ({match}) => {
  const productName = match.params.productName;
  return (
    <div>
      {productName === 'Product1' && <p>Product1 Content</p>}
      {productName === 'Product2' && <p>Product2 Content</p>}
    </div>
  )
}
export default ProductPage