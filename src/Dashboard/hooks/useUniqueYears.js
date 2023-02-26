import React, { useState, useEffect } from "react";
import axios from "axios";
export const useUniqueYears = () => {
  const [uniqueYears, setUniqueYears] = useState([]);

  useEffect(() => {
    var config = {
      method: "post",
      url: "http://localhost:5555/getUniqueYears",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setUniqueYears(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return { uniqueYears, setUniqueYears };
};
