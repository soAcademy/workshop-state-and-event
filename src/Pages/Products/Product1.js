import { Link } from "react-router-dom"

const Product1 = () => {
  return (
    <div>
      <Link to="/Home">Home</Link> | <Link to="/About">About</Link> | <span className="underline">Products</span> 
      <div className="w-[300px] bg-gray-300 h-[400px]">
      <Link to="Product1">Product1</Link> | <Link to="Product2">Product2</Link>
        </div>
    </div>
  )
}

export default Product1