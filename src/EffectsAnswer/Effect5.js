import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  const [menus, setMenus] = useState();

  // parallel
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.sampleapis.com/coffee/hot",
    }).then((res) => {
      console.log(res.data);
      setMenus(res.data);
    });
    // async
  }, []);

  // sequential
  // useEffect(async () => {
  //   const response = await axios({
  //     method: "get",
  //     url: "https://api.sampleapis.com/coffee/hot",
  //   });

  //   console.log(response.data);
  //   setMenus(response.data);
  // }, []);

  return (
    <>
      {/* <p>{JSON.stringify(data)}</p> */}
      {menus?.map((r) => (
        <div className="bg-red-700 mb-2">{r.title}</div>
      ))}
      {/* {menus !== undefined &&
        menus.map((r) => <div className="bg-red-700 mb-2">{r.title}</div>)} */}
    </>
  );
};

export default Effect5;
