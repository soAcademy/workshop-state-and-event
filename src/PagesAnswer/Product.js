import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  // const [productData, setProductData] = useState();

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: `https://api.sprinttech.com/product/${productId}`,
  //   }).then((response) => {
  //     console.log(response);
  //     setProductData(response);
  //   })

  // }, [])


  return <div>Product Id: {productId}</div>
}

export default Product;

// 
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