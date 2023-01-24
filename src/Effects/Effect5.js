import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  const [data, setData] = useState();
  const [menus, setMenus] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.sampleapis.com/coffee/hot",
    }).then((response) => {
      console.log(response.data);
      setData(response.data);
      // setMenus(response.data);
    });
    //sync
  }, []);

  return (
    <>
      <p>{JSON.stringify(data)}</p>
      {data !== undefined &&
        data.map((r) => <div className="bg-teal-700 mb-2">{r.title}</div>)}
      {/* {
        //เอาข้างบนไปใช้ได้เลย
        data !==""&&data.data.map((r) => <div className="bg-teal-700 mb-2">{r.title}</div>)
      } */}
      {/* {menus !== undefined && menus.map((r) => <div className="bg-teal-700 mb-2">{r.title}</div>)} */}
    </>
  );
};

export default Effect5;

//มันจะได้เป็นข้อมูลเป็ฯตัว .json เพื่อเอาไป render ต่อ
//ข้อนี้มันใช่มากที่สุดแล้ว เช่นถ้าเราทำตัว form ให้ส่งข้อมูลกลับมายังgik
//
