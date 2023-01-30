import {useState,useEffect} from 'react';
import axios from 'axios';
import Product3 from '../Pages/Products/Product3';
const Effect103=()=>{
  const[data,setData]=useState();
  useEffect(()=>{
    const a = axios({
      method: "get",
      url: "https://dummyjson.com/carts",
    }).then((r)=>{
      console.log(r);
      console.log('r.Data',r.data);
      console.log('r.Data.carts',r.data.carts);
      console.log('r.data.carts.map(r=>r.products)',r.data.carts.map(r=>r.products));
      console.log('r.data.carts.map(r=>r.products).map(r=>r.title)',r.data.carts.map(r=>r.products).map(r=>r[1].title));
      console.log('r.Data.carts[0].products[0].title',r.data.carts[0].products[0].title);
      setData(r.data.carts.map(r=>r.products).map(r=>r[0].title));
      // console.log(r.data.carts.map((r,idx)=>idx<20?r:0));
  
    });
   
},[]);
  return(
    <>
    <div className='bg-red-200'>Heloo55</div>
    {/* {JSON.stringify(data)} */}
    {data}
    
    <Product3 product3Input={data}/>
    </>
  );
};
export default Effect103;