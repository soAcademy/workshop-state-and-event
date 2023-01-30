import {useState,useEffect} from 'react';
import axios from 'axios';
const TestData=()=>{
  const[data,setData]=useState();
  useEffect(()=>{
    const result = axios({
      method:'get',
      url:'https://dummyjson.com/carts'
    });
    console.log('data from get method',result);
  },[]);
  return({data});
};
export default TestData;