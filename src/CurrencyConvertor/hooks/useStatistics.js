import { useState, useEffect } from "react";
import axios from "axios";

export const useStatistics = ({ toCurr, fromCurr }) => {
  const [averageArr, setAverageArr] = useState(undefined);

  useEffect(() => {
    const configStatic = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurr}&to=${toCurr}`
      )}`,
      headers: {
        authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(configStatic)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // console.log(Object.keys(response.data));
        const average = Object.keys(response.data)?.map((r) => ({
          time: r,
          average: response.data[r]["average"].toFixed(4),
          reverse: (1 / response.data[r]["average"]).toFixed(4),
        }));
        // console.log(average);
        setAverageArr(average);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [toCurr, fromCurr]);

  return { averageArr, setAverageArr };
};
