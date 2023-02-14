import EChartsReact from "echarts-for-react";

export const AccidentProvinceStackedBar = ({ provinceStat }) => {
  const options = {
    globe: {
      show: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      confine: true,
      // position: [10,10]
    },
    grid: {
      containLabel: true,
      width: "89%",
      height: "80%",
      left: "3%",
      top: "2%",
    },
    dataZoom: {
      // start: 80,
      type: "inside",
      orient: "vertical",
    },
    xAxis: {
      type: "value",
      max: "dataMax",
    },
    yAxis: {
      // type: 'category',
      data: provinceStat[0].province.map((e) => e.province),
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 0,
      },
    },
    series: provinceStat.map((data) => {
      return {
        name: data.vehicle,
        type: "bar",
        stack: "total",
        emphasis: {
          focus: "series",
        },
        data: data.province.map((e) => e.total),
      };
    }),
  };
  return (
    <EChartsReact
      style={{ height: "1000px", width: "400px" }}
      option={options}
    />
  );
};
