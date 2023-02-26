import axios from "axios";
import React, { useState, useEffect } from "react";

export const useAccidentData = ({
  yearQuery,
  vehicleQuery,
}) => {
  const [accidentData, setAccidentData] = useState();
  useEffect(() => {
    var data = JSON.stringify({
      "yearQuery": yearQuery,
      "vehicleQuery": vehicleQuery
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:5555/getAccidentData',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      setAccidentData(response.data);

    })
    .catch(function (error) {
      console.log(error);
    });
    
  }, [yearQuery, vehicleQuery]);

  return { accidentData, setAccidentData };
};
