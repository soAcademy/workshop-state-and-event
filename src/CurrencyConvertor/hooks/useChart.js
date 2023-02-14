import { useState, useEffect } from "react";
import axios from "axios";

export const useChart = ({ toCurr, fromCurr }) => {
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    const configChart = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurr}&toCurrency=${toCurr}&crypto=true\n`
      )}`,
      headers: {
        authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(configChart)
      .then(function (response) {
        // console.log(response.data);
        const datas = response.data.batchList[0].rates.slice(1);
        // console.log(datas);
        // console.log("max", Math.max(...datas));

        setChartOption({
          title: {
            text: `Currency Rate ${fromCurr} to ${toCurr}`,
          },
          xAxis: {
            type: "category",
            data: Object.keys(datas).reverse(),
            boundaryGap: false,
          },
          yAxis: {
            type: "value",
            min: Math.min(...datas),
          },
          series: [
            {
              data: datas,
              type: "line",
            },
          ],
          grid: {
            left: "50",
            right: "20",
          },
          tooltip: {
            trigger: "axis",
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [toCurr, fromCurr]);

  return { chartOption, setChartOption };
};
