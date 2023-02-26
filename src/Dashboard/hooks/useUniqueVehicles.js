import React, { useState, useEffect } from "react";
import axios from "axios";
export const useUniqueVehicles = () => {
  const [uniqueVehicles, setUniqueVehicles] = useState([]);

  useEffect(() => {
    var config = {
      method: "post",
      url: "http://localhost:5555/getUniqueVehicles",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setUniqueVehicles(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return { uniqueVehicles, setUniqueVehicles };
};
