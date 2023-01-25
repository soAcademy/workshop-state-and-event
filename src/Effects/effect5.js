import {useState,useEffect} from 'react';
import axios from "axios";

const Effect5=()=>{
  const[menu,setMenu]=useState();

  useEffect(()=>{
    axios({
      method: "get",
      url: "https://dummyjson.com/products"})
      .then((response)=>{
        console.log(response.data);
        setMenu(response.data.products);
      });
    
  },[]);
  
  return(
    <>
    {/* <p>{JSON.stringify(menu)}</p> */}
    {menu?.map((r) => (
        <div className="bg-red-200 mb-2">{r.title}</div>
      ))}
    </>
  );
};
export default Effect5;