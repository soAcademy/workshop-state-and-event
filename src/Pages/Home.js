import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <div>{props.title}</div>
    <div>{props.name2}</div>
    <span className="underline ml-5 p-2 bg-blue-400 hover:bg-purple-400 rounded-lg">
      Home
      </span> |{" "}
    <span className="px-4 " >|</span>
      <Link to="/about" className="p-2 bg-blue-400 hover:bg-purple-400 rounded-lg">
      About
      </Link><span className="px-4 " >|</span>
      <Link to="/products/product1" className="p-2 bg-blue-400 hover:bg-purple-400 rounded-lg">
        Product1
      </Link><span className="px-4" >|</span>
      <Link to="/products/product2" className="p-2 bg-blue-400 hover:bg-purple-400 rounded-lg">
        Product2
        </Link>
  </div>
);


export default Home;

// const Home = () => (
//   <div>
//     <span className="underline">
//       Home
//       </span> |{" "}
//       <Link to="/about">
//       About
//       </Link>
//   </div>
// );


// การทำงานของ productId
// 1. fetch API www.binproduct.com/shops
// const shops = [
//   {
//     image: '1.jpg',
//     name: 'Collagen',
//     product: 'c123'
//   },
//   {
//     image: '2.jpg',
//     name: 'Serum',
//     product: 'c124'
//   }
// ]
// ทำ Link -> /product/c123, /product/c124

// หน้า product -> productId ผ่าน useParams
// fetchAPI www.binproduct.com/product/c123

// const product = {
//   image: '1.jpg',
//   name: 'Collagen',
//   price: '180',
//   description: 'Lorem',
//   faqs: []
// }