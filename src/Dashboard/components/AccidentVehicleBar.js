import EChartsReact from "echarts-for-react";

export const AccidentVehicleBar = ({ vehicleStat }) => {
  const options = {
    grid: {
      containLabel: true,
      width: "90%",
      height: "80%",
      left: "5%",
    },
    xAxis: {
      type: "category",
      data: vehicleStat.map((e) => e.vehicle),
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 40,
      },
    },
    yAxis: {
      scale: true,
      splitNumber: 4,
    },
    series: [
      {
        name: "Frequency",
        data: vehicleStat.map((e) => e.total),
        type: "bar",
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
  };

  return <EChartsReact option={options} />;
};
