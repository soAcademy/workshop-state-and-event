import ReactECharts from "echarts-for-react";

export const DeathTrendLine = ({ data }) => {
  const uniqueYears = [...new Set(data.map((e) => e.year))];
  const _trendData = uniqueYears.map((year) => {
    return data
      .filter((i) => i.year === year)
      .reduce((acc, j) => {
        const yearString = String(year);
        acc[year] = {
          year: year,
          totalDeathMale: (acc[year]?.totalDeathMale ?? 0) + j.deathMale,
          totalDeathFemale: (acc[year]?.totalDeathFemale ?? 0) + j.deathFemale,
          totalDeath:
            (acc[year]?.totalDeath ?? 0) + j.deathMale + j.deathFemale,
        };
        return acc;
      }, {});
  });
  const trendData = _trendData
    .map((e) => Object.values(e))
    .flat()
    .sort((a, b) => a.year - b.year);
  const options = {
    textStyle: {
      fontFamily: "Kanit",
    },
    grid: {
      containLabel: true,
      width: "100%",
      height: "50%",
      left: "2%",
    },
    xAxis: {
      type: "category",
      data: trendData.map((e) => e.year),
      name: "ปี",
    },
    yAxis: {
      type: "value",
      name: "จำนวนผู้เสียชีวิต",
      scale: true,
      splitNumber: 8,
    },
    series: [
      {
        name: "จำนวนผู้เสียชีวิต",
        data: trendData.map((e) => e.totalDeath),
        type: "line",
        smooth: true,
        lineStyle: {
          color: "red",
          width: 2,
        },
        label: {
          show: true,
          textStyle: {
            color: "blue",
          },
        },
        center: ["25%", "25%"],
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return <ReactECharts option={options} />;
};

