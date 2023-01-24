import axios from "axios";
import React, { useState, useEffect } from "react";

const Effect5 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.sampleapis.com/coffee/hot`,
    }).then((response) => {
      setData(response.data);
    });
    // console.log(data.map((e) => console.log(e.ingredients)));
  }, []);

  return (
    <div className="p-2 m-2 bg-gray-300 w-[600px] h-[500px] overflow-scroll rounded-lg">
      <p>Effect5: API</p>
      <div className="w-full h-[400px] overflow-scroll border-2 border-black">
        {JSON.stringify(data)}
      </div>
      <table className="table-auto border-separate border-spacing-x-1">
        <thead className="font-bold">
          <tr className="border-2 border-black">
            <th className="border-2 border-black">Menu</th>
            <th className="border-2 border-black w-1/2">Description</th>
            <th className="border-2 border-black">Ingredient</th>
            <th className="border-2 border-black">Image</th>
          </tr>
        </thead>
        <tbody>
          {data !== "" &&
            data.map((e) => {
              const ingredients = e.ingredients;
              return (
                <tr>
                  <td className="border-2 border-black">{e.title}</td>
                  <td className="border-2 border-black">{e.description}</td>
                  <td className="border-2 border-black">
                    <ul type='disc'>
                      {ingredients.map((g) => {
                        return <li>• {g}</li>;
                      })}
                    </ul>
                  </td>
                  <td className="border-2 border-black"><img src={e.image} className="cover"></img></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Effect5;
