import ReactECharts from "echarts-for-react";


const Chart1 = () => {
  const orders = [
    {
      date: "2022-01-13",
      orderValue: 10000
    },
    {
      date: "2022-01-14",
      orderValue: 22000
    },
    {
      date: "2022-01-15",
      orderValue: 5000
    },
    {
      date: "2022-01-16",
      orderValue: 25000
    }
  ]
  
  const options = {
    xAxis : {
      type: "category",
      date: orders.map((order)  => order.date),
      name: "วันที่"
    },
    yAxis: {
      type: "value",
      name: "มูลค่าสั่งซื้อ"
    },
    series: [
      {
        data: orders.map((order) => order.orderValue),
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };


  // const options = {
  //   xAxis: {
  //     type: "category",
  //     data: orders.map((order) => order.date),
  //     name: "วันที่"
  //   },
  //   yAxis: {
  //     type: "value",
  //     name: "มูลค่าสั่งซื้อ"
  //   },
  //   series: [
  //     {
  //       data: orders.map((order) => order.orderValue),
  //       type: "line",
  //       smooth: true,
  //     },
  //   ],
  //   tooltip: {
  //     trigger: "axis",
  //   },
  // };

  return <ReactECharts option={options} />;
};

export default Chart1;