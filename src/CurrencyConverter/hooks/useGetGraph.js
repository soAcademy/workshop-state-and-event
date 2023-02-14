import React, { useEffect, useState } from "react";
import axios from "axios";

export const useGetGraph = ({ fromCurrency, toCurrency, amount }) => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const config2 = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config2).then(function (response) {
      console.log("ccc", JSON.stringify(response.data));

      const xAxisData = [
        ...response.data?.batchList[0]?.rates?.slice(1)?.keys(),
      ];
      console.log("xAxisData", xAxisData);

      const yAxisData = response.data?.batchList[0]?.rates?.slice(1)?.reverse();
      console.log("yAxisData", yAxisData);

      const tempOption = {
        xAxis: {
          type: "category",
          data: xAxisData.map((r) => r),
          name: "วันที่",
        },
        yAxis: {
          type: "value",
          name: "อัตราแรกเปลี่ยน",
          max: "dataMax",
          min: "dataMin",
        },
        series: [
          {
            data: yAxisData,
            type: "line",
            smooth: true,
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };

      setOption(tempOption);
    });
  }, [fromCurrency, toCurrency, amount]);
  return {
    option,
    setOption,
  };
};
