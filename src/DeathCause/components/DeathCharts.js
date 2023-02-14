import EChartsReact from "echarts-for-react";

export const DeathCharts = ({
  optionForDeathTrend,
  optionForDeathsByGender,
  currentYear,
}) => {
  // const optionForDeathTrend = {
  //   xAxis: {
  //     type: "category",
  //     data: ["2554", "2555", "2556", "2557", "2558", "2559", "2560"],
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   series: [
  //     {
  //       data: [820, 932, 901, 934, 1290, 1330, 1320],
  //       type: "line",
  //       smooth: true,
  //     },
  //   ],
  // };

  // const optionForDeathsByGender = {
  //   tooltip: {
  //     trigger: "item",
  //   },
  //   series: [
  //     {
  //       name: "เพศ",
  //       type: "pie",
  //       radius: "50%",
  //       data: [
  //         { value: 1048, name: "เพศชาย" },
  //         { value: 735, name: "เพศหญิง" },
  //       ],
  //       emphasis: {
  //         itemStyle: {
  //           shadowBlur: 10,
  //           shadowOffsetX: 0,
  //           shadowColor: "rgba(0, 0, 0, 0.5)",
  //         },
  //       },
  //     },
  //   ],
  // };
  // console.log(optionForDeathTrend);

  return (
    <div>
      <h2 className="mb-2 text-xl">แนวโน้มการเสียชีวิต</h2>
      <EChartsReact option={optionForDeathTrend} />
      <h2 className="mb-2 text-xl">
        จำนวนผู้เสียชีวิตปี {currentYear} แยกตามเพศ
      </h2>
      <EChartsReact option={optionForDeathsByGender} />
    </div>
  );
};
