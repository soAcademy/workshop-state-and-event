import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  const [menus, setMenus] = useState(); //ถ้าใส่ "" จะเป็น String ไม่เท่ากับ undefined แต่ว่า useStateจะdefault เป็น undefined ก่อน

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
      {
        menus?.map((r) => (
          <div className="bg-red-700 mb-2">{r.title}</div>
        ))
        /*menus !== undefined && menus.map((R) => <div...)*/
      }
    </>
  );
};

export default Effect5;
