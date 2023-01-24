import {useState,useEffect} from 'react';
import axios from "axios";

const Effect5=()=>{
  const[menu,setData]=useState("");

  useEffect(()=>{
    axios({
      method: "get",
      url: "https://api.sampleapis.com/coffee/hot"})
      .then((response)=>{
        console.log(response.data);
        setData(response.data);
      });
    
  },[]);
  
  return(
    <>
    {/* <p>{JSON.stringify(menu)}</p> */}
    {
      // console.log(typeof(menu.title))
    menu?.map((r)=><div className='bg-red-200'>{r.title}</div>)
    }    
    </>
  );
};
export default Effect5;