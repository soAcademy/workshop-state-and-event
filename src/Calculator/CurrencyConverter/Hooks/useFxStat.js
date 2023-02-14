import axios from "axios";
import React, { useState, useEffect } from "react";

export const useFxStat = ({ from, to, authToken }) => {
  const [stats, setStats] = useState();
  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${from}&to=${to}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    };

    axios(config)
      .then(function (response) {
        setStats(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setStats(false);
      });
  }, [from, to]);
  return stats;
};
