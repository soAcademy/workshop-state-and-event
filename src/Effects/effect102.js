import { useState, useEffect } from "react";
import axios from "axios";

const Effect102 = () => {
  const [menu, setMenu] = useState({});
  useEffect( () => {
    console.log("Menu before", menu);
    const rawData = axios({
      method: "get",
      url: "https://dummyjson.com/products",
    });
    console.log("rawData after get method : ", rawData);
    // 0
    rawData.then((res) => {
      setMenu(res.data.products);
// 10
      console.log("All data", res); //รู้ว่าแล้วมีอะไรอยู่ใน file JSON บ้าง เช่น data,header,config...
      console.log("Only data", res.data); //เราต้องการแค่ data ใน JSON และนำไป set ใส่ menu
     
      // console.log(res);  //ข้อมูลที่ได้จาก useEffect ที่ใช้ axios และ method get
    });

    //const result = await rawData;



    // 0
    //console.log("menu after setMenu", dataAfterThen);
  }, []);

  return (
    <>
      {/* <p>{menu}</p> */}
      {/* <p>{JSON.stringify(menu)}</p>   ค่า data จะแสดงในหน้า html ทั้งหมด ทำให้เรามั่นใจแล้วว่าตัว menu ข้างในมี data ที่เราต้องการ */}

      <p>{JSON.stringify(menu)}</p>
      {
        // console.log(typeof(menu.title))
        menu?.map((r)=><div className='bg-red-200'>{r.title}</div>)
      }
    </>
  );
};
export default Effect102;
