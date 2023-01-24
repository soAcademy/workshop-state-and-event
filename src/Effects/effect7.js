import { useState ,useEffect} from "react"

const Effect7=()=>{
  const[light1,setLight1]=useState(false);
  const[light2,setLight2]=useState(false);
  const[greeting,setGreeting]=useState("Halo");
  useEffect(()=>{
    light1&&light2 ? setGreeting("Both Greeting") : setGreeting("Halo");

  },[light1,light2]);

  return(
    <>
    <p>{greeting}</p>
    <button className="bg-red-200 p-4" onClick={()=>setLight1(!light1)}>Red{light1 ? "ON" :"OFF"}</button>
    <button className="bg-blue-200 p-4" onClick={()=>setLight2(!light2)}>Blue{light2 ? "ON" :"OFF"}</button>
    </>
  );
};
export default Effect7;


