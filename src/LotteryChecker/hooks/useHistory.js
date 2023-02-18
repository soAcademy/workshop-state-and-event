import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useHistory = ({loadMore}) => {  
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const queryDate = new Date(new Date().getTime() - 86400000 * 90 * loadMore)
      .toISOString()
      .split("T")[0];
    console.log("_queryDate", queryDate);
    var config = {
      method: "get",
      url: `https://www.thairath.co.th/api-lottery/history?date=${queryDate}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        const _history = [...history, ...response.data.data];
        console.log("_history", _history);
        setHistory(_history);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [loadMore]);
  return {history, setHistory}
}