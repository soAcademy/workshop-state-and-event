import { useState, useEffect } from "react";
import axios from "axios";
  
export  const useChartOptions = ({authToken,fromCurrency,toCurrency})=>{
    const [chartOption, setChartOption] = useState({});
    useEffect(()=>{},)
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
          name: "อัตราแลกเปลี่ยน",
          max: "dataMax",
          min: "dataMin",
          splitArea: {
            interval: "auto",
            show: false,
            areaStyle: {
              color: ["rgba(250,250,250,0.3)"],
            },
          },
        },
        series: [
          {
            data: _exchangeChart?.batchList[0]?.rates?.slice(1).reverse(),
            type: "line",
            smooth: true,
            lineStyle: { color: "#fac858", width: 2, type: "solid" },
          },
        ],
        textStyle: { color: "#ffffff" },
        tooltip: {
          trigger: "axis",
        },
      };
      setChartOption(_chartOption);
    });
    return{
      chartOption
    }
  };



   

