import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  const [menus, setMenus] = useState();
  //ใน usestate ห้ามมี "" เพราะมันแปลง undefined ให้เป็น "" ทำให้ run 21 error

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.sampleapis.com/coffee/hot",
    }).then((response) => {
      console.log(response.data);
      setMenus(response.data);
    });
  }, []);

  return (
    <>
      {/* <p>{JSON.stringify(menus)}</p> */}
      {menus?.map((r) => (
        <div className="bg-red-700 mb-2">{r.title}</div>
      ))}
      {/* {menus !== undefined &&
        menus.map((r) => <div className="bg-red-700 mb-2">{r.title}</div>)} */}
    </>
  );
};

export default Effect5;
