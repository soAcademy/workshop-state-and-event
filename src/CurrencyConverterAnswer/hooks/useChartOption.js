import { useState, useEffect } from "react";
import axios from "axios";

export const useChartOption = ({ authToken, fromCurrency, toCurrency }) => {
  const [chartOption, setChartOption] = useState({});
  console.log("useChartOption");

  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeChart = res.data;
      const _chartOption = {
        xAxis: {
          type: "category",
          data: [..._exchangeChart?.batchList[0]?.rates?.slice(1)?.keys()].map(
            (r) => r - _exchangeChart?.batchList[0]?.rates?.length - 1
          ),
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
            data: _exchangeChart?.batchList[0]?.rates?.slice(1).reverse(),
            type: "line",
            smooth: true,
            lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };

      setChartOption(_chartOption);
    });
  }, [fromCurrency, toCurrency]);

  return { chartOption };
};
