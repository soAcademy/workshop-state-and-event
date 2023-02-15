import ReactECharts from "echarts-for-react";

export const DeathChart = ({ chartOption1, chartOption2 }) => (
  <div className="bg-green-100 w-1/3 p-4 h-screen overflow-auto">
    <div className="font-bold mb-2">แนวโน้มการเสียชีวิต</div>
    <ReactECharts option={chartOption1} />
    <div className="font-bold mb-2">การเสียชีวิตตามเพศ</div>
    <ReactECharts option={chartOption2} />
  </div>
);

const DeathFilter = ({ yearLists, currentYear, setCurrentYear }) => (
  <div>
    <div className="mt-4">
      เลือกปีพ.ศ.{" "}
      <select
        onChange={(e) => setCurrentYear(e.target.value)}
        value={currentYear}
      >
        {yearLists.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
    <div className="">การเสียชีวิตของปีพ.ศ. {currentYear}</div>
  </div>
);
