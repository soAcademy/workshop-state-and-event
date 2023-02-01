import ReactECharts from "echarts-for-react";

const Chart3 = () => {
  const stockPrices = [
    {
      date: "2022-01-11",
      open: 172.320007,
      high: 175.179993,
      low: 170.820007,
      close: 175.080002,
      adjClose: 174.069733,
      volume: 76138300,
    },
    {
      date: "2022-01-12",
      open: 176.119995,
      high: 177.179993,
      low: 174.820007,
      close: 175.529999,
      adjClose: 174.517136,
      volume: 74805200,
    },
    {
      date: "2022-01-13",
      open: 175.779999,
      high: 176.619995,
      low: 171.789993,
      close: 172.190002,
      adjClose: 171.196426,
      volume: 84505800,
    },
    {
      date: "2022-01-14",
      open: 171.339996,
      high: 173.779999,
      low: 171.089996,
      close: 173.070007,
      adjClose: 172.07135,
      volume: 80440800,
    },
    {
      date: "2022-01-18",
      open: 171.509995,
      high: 172.539993,
      low: 169.410004,
      close: 169.800003,
      adjClose: 168.820206,
      volume: 90956700,
    },
    {
      date: "2022-01-19",
      open: 170,
      high: 171.080002,
      low: 165.940002,
      close: 166.229996,
      adjClose: 165.270798,
      volume: 94815000,
    },
    {
      date: "2022-01-20",
      open: 166.979996,
      high: 169.679993,
      low: 164.179993,
      close: 164.509995,
      adjClose: 163.560715,
      volume: 91420500,
    },
    {
      date: "2022-01-21",
      open: 164.419998,
      high: 166.330002,
      low: 162.300003,
      close: 162.410004,
      adjClose: 161.47287,
      volume: 122848900,
    },
    {
      date: "2022-01-24",
      open: 160.020004,
      high: 162.300003,
      low: 154.699997,
      close: 161.619995,
      adjClose: 160.687378,
      volume: 162294600,
    },
    {
      date: "2022-01-25",
      open: 158.979996,
      high: 162.759995,
      low: 157.020004,
      close: 159.779999,
      adjClose: 158.858017,
      volume: 115798400,
    },
    {
      date: "2022-01-26",
      open: 163.5,
      high: 164.389999,
      low: 157.820007,
      close: 159.690002,
      adjClose: 158.768539,
      volume: 108275300,
    },
    {
      date: "2022-01-27",
      open: 162.449997,
      high: 163.839996,
      low: 158.279999,
      close: 159.220001,
      adjClose: 158.301254,
      volume: 121954600,
    },
    {
      date: "2022-01-28",
      open: 165.710007,
      high: 170.350006,
      low: 162.800003,
      close: 170.330002,
      adjClose: 169.347153,
      volume: 179935700,
    },
  ];
  const options = {
    xAxis: {
      data: stockPrices.map((r) => r.date),
    },
    yAxis: {
      // max: "dataMax",
      // min: "dataMin",
      max: Math.max(...stockPrices.map((r) => r.high)),
      min: Math.min(...stockPrices.map((r) => r.low)),
      type: "value",
    },
    series: [
      {
        type: "candlestick",
        data: stockPrices.map((r) => [r.close, r.open, r.low, r.high]),
      },
      {
        name: "AdjClose",
        type: "line",
        data: stockPrices.map((r) => r.adjClose),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
      {
        name: "High",
        type: "line",
        data: stockPrices.map((r) => r.high),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default Chart3;
