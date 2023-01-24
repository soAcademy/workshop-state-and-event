import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect6 = () => {
  const [menu, setMenu] = useState(null);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.sampleapis.com/coffee/hot",
  //   }).then((response) => {
  //     console.log(response);
  //     setMenu(response.data);
  //   });
  // }, []);

  return (
    <>
      <button
        onClick={() => {
          axios({
            method: "get",
            url: "https://api.sampleapis.com/coffee/hot",
          }).then((response) => {
            console.log(response);
            setMenu(response.data);
          });
        }}
      >
        FETCH
      </button>
      {/* <p>{JSON.stringify(data)}</p> */}
      {menu &&
        menu.map((r) => (
          <div key={r.id} className="bg-red-300 mt-1">
            {r.id} . {r.title}
          </div>
        ))}
    </>
  );
};

export default Effect6;
