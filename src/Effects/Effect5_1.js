import React, { useState, useEffect } from "react";
import axios from "axios";
const Effect5_1 = () => {
  const [menus, setMenus] = useState();

  useEffect(() => {
    axios({ method: "get", url: `https://api.sampleapis.com/coffee/hot` }).then(
      (response) => {
        console.log(response.data);
        setMenus(response.data);
      }
    );
  }, []);

  return (
    <>
      {/* <p>{JSON.stringify(data)}</p> */}
      {menus?.map((r) => (  // ? for checking if the array is undefined or not: only proceeds to map if not undefined
        <div className="bg-blue-500 mb-2">{r.title}</div>
      ))}
    </>
  );
};

export default Effect5_1;
