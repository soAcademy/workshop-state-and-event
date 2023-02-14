import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("THB");

  return {
    amount,
    setAmount,
    fromCurr,
    setFromCurr,
    toCurr,
    setToCurr,
  };
};

export const useFetchEachExchange = ({ amount, toCurr, fromCurr }) => {
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/midmarket-converter/`
      )}`,
      headers: {
        authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        const valueOptions = Object.keys(response.data.rates)?.map((r) => ({
          name: r,
          value: response.data.rates[r],
        }));
        // console.log(valueOptions);
        setOptions(valueOptions);

        const fromToUSD = response.data.rates[fromCurr];
        // console.log(fromToUSD);
        const toToUSD = response.data.rates[toCurr];
        // console.log(toToUSD);
        // console.log((amount / fromToUSD) * toToUSD);
        setResult(((amount / fromToUSD) * toToUSD).toFixed(4));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [amount, toCurr, fromCurr]);
  return { options, setOptions, result, setResult };
};

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
