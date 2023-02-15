import ThailandDeathCause from "./thailand-death-cause.json";
import { useSelectedCause, useTotalDeath, useDeathByCause, useDeathByProvinces, useChartOption1, useChartOption2 } from "./hook";
import { DeathByCause, DeathByProvince, DeathChart, DeathFilter } from "./component";

// const DeathByCause = ({ totalDeath, deathByCauses, setSelectedCause }) => (
//   <div className="bg-blue-100 w-1/3 p-4 h-screen overflow-auto">
//     <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
//     <table className="w-full table-auto">
//       <tbody>
//         <tr
//           className="hover:bg-red-100 hover:cursor-pointer"
//           onClick={() => setSelectedCause(undefined)}
//         >
//           <td>ทั้งหมด</td>
//           <td>{totalDeath.toLocaleString()}</td>
//           <td>100%</td>
//         </tr>
//         {deathByCauses?.map((r, idx) => (
//           <tr
//             key={idx}
//             className="hover:bg-red-100 hover:cursor-pointer"
//             onClick={() => setSelectedCause(r.cause)}
//           >
//             <td>{r.cause}</td>
//             <td>{r.death.toLocaleString()}</td>
//             <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// const DeathByProvince = ({ totalDeath, deathByProvinces }) => (
//   <div className="bg-amber-100 w-1/3 p-4 h-screen overflow-auto">
//     <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
//     <table className="w-full table-auto">
//       <tbody>
//         <tr>
//           <td>ทั้งหมด</td>
//           <td>{totalDeath.toLocaleString()}</td>
//           <td>100%</td>
//         </tr>
//         {deathByProvinces?.map((r, idx) => (
//           <tr key={idx}>
//             <td>{r.province}</td>
//             <td>{r.death.toLocaleString()}</td>
//             <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// const DeathChart = ({ chartOption1, chartOption2 }) => (
//   <div className="bg-green-100 w-1/3 p-4 h-screen overflow-auto">
//     <div className="font-bold mb-2">แนวโน้มการเสียชีวิต</div>
//     <ReactECharts option={chartOption1} />
//     <div className="font-bold mb-2">การเสียชีวิตตามเพศ</div>
//     <ReactECharts option={chartOption2} />
//   </div>
// );

// const DeathFilter = ({ yearLists, currentYear, setCurrentYear }) => (
//   <div>
//     <div className="mt-4">
//       เลือกปีพ.ศ.{" "}
//       <select
//         onChange={(e) => setCurrentYear(e.target.value)}
//         value={currentYear}
//       >
//         {yearLists.map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>
//     </div>
//     <div className="">การเสียชีวิตของปีพ.ศ. {currentYear}</div>
//   </div>
// );

// const useSelectedCause = () => {
//   const [selectedCause, setSelectedCause] = useState();
//   const [currentYear, setCurrentYear] = useState(2558);
//   useEffect(() => {
//     setSelectedCause(undefined);
//   }, [currentYear]);
//   return {
//     currentYear,
//     setCurrentYear,
//     selectedCause,
//     setSelectedCause,
//   };
// };

// const useTotalDeath = ({ currentYear, selectedCause }) => {
//   const [totalDeath, setTotalDeath] = useState(0);
//   useEffect(() => {
//     const deathCauseDatas = ThailandDeathCause.filter(
//       (r) => r.year == currentYear
//     );
//     const _totalDeath = deathCauseDatas?.reduce(
//       (acc, r) => acc + r.deathMale + r.deathFemale,
//       0
//     );
//     setTotalDeath(_totalDeath);
//   }, [currentYear, selectedCause]);
//   return {
//     totalDeath,
//     setTotalDeath,
//   };
// };

// const useDeathByCause = ({ currentYear, selectedCause }) => {
//   const [deathByCauses, setDeathByCauses] = useState([]);
//   useEffect(() => {
//     const deathCauseDatas = ThailandDeathCause.filter(
//       (r) => r.year == currentYear
//     );

//     const deathCauseLists = [
//       ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
//     ];
//     // console.log(_deathCauseLists);

//     const _deathByCauses = deathCauseLists
//       .map((cause) => {
//         const totalDeath = deathCauseDatas
//           .filter((r) => r.causeOfDeath === cause)
//           .reduce(
//             (acc, r) => ({
//               death: acc.death + r.deathFemale + r.deathMale,
//               deathFemale: acc.deathFemale + r.deathFemale,
//               deathMale: acc.deathMale + r.deathMale,
//             }),
//             {
//               death: 0,
//               deathFemale: 0,
//               deathMale: 0,
//             }
//           );
//         return {
//           cause,
//           death: totalDeath.death,
//           deathFemale: totalDeath.deathFemale,
//           deathMale: totalDeath.deathMale,
//         };
//       })
//       .filter((r) => r.death > 0)
//       .sort((a, b) => b.death - a.death);
//     // console.log(_deathByCauses);
//     setDeathByCauses(_deathByCauses);
//   }, [currentYear, selectedCause]);
//   return {
//     deathByCauses,
//     setDeathByCauses,
//   };
// };

// const useDeathByProvinces = ({ currentYear, selectedCause }) => {
//   const [deathByProvinces, setDeathByProvinces] = useState([]);
//   useEffect(() => {
//     const deathCauseDatas = ThailandDeathCause.filter(
//       (r) => r.year == currentYear
//     );
//     const provinceLists = [
//       ...new Set(deathCauseDatas.map((r) => r.provinceName)),
//     ];
//     // console.log(_provinceLists);

//     const _deathByProvinces = provinceLists
//       .map((province) => {
//         const totalDeath = deathCauseDatas
//           .filter(
//             (r) =>
//               r.provinceName === province &&
//               (selectedCause === undefined
//                 ? true
//                 : r.causeOfDeath === selectedCause)
//           )
//           .reduce(
//             (acc, r) => ({
//               death: acc.death + r.deathFemale + r.deathMale,
//               deathFemale: acc.deathFemale + r.deathFemale,
//               deathMale: acc.deathMale + r.deathMale,
//             }),
//             {
//               death: 0,
//               deathFemale: 0,
//               deathMale: 0,
//             }
//           );
//         return {
//           province,
//           death: totalDeath.death,
//           deathFemale: totalDeath.deathFemale,
//           deathMale: totalDeath.deathMale,
//         };
//       })
//       .filter((r) => r.death > 0)
//       .sort((a, b) => b.death - a.death);
//     // console.log(_deathByProvinces);
//     setDeathByProvinces(_deathByProvinces);
//   }, [currentYear, selectedCause]);
//   return {
//     deathByProvinces,
//     setDeathByProvinces,
//   };
// };

// const useChartOption1 = ({ yearLists, currentYear, selectedCause }) => {
//   const [chartOption1, setChartOption1] = useState({});
//   useEffect(() => {
//     const _deathByYears = yearLists
//       .map((year) => {
//         const totalDeath = ThailandDeathCause.filter(
//           (r) => r.year == year
//         ).reduce(
//           (acc, r) => ({
//             death: acc.death + r.deathFemale + r.deathMale,
//             deathFemale: acc.deathFemale + r.deathFemale,
//             deathMale: acc.deathMale + r.deathMale,
//           }),
//           {
//             death: 0,
//             deathFemale: 0,
//             deathMale: 0,
//           }
//         );
//         return {
//           year,
//           death: totalDeath.death,
//           deathFemale: totalDeath.deathFemale,
//           deathMale: totalDeath.deathMale,
//         };
//       })
//       .sort((a, b) => a.year - b.year);

//     console.log(_deathByYears);

//     const _chartOption1 = {
//       xAxis: {
//         type: "category",
//         data: _deathByYears.map((r) => r.year),
//         name: "ปีพ.ศ.",
//       },
//       yAxis: {
//         type: "value",
//         name: "จำนวนผู้เสียชีวิต",
//         max: "dataMax",
//         min: "dataMin",
//       },
//       series: [
//         {
//           data: _deathByYears.map((r) => r.death),
//           type: "line",
//           smooth: true,
//           lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
//         },
//       ],
//       tooltip: {
//         trigger: "axis",
//       },
//     };
//     setChartOption1(_chartOption1);
//   }, [currentYear, selectedCause]);
//   return {
//     chartOption1,
//     setChartOption1,
//   };
// };

// const useChartOption2 = ({ currentYear, selectedCause }) => {
//   const [chartOption2, setChartOption2] = useState({});
//   useEffect(() => {
//     const deathCauseDatas = ThailandDeathCause.filter(
//       (r) => r.year == currentYear
//     );
//     const _deathBySex = deathCauseDatas.reduce(
//       (acc, r) => ({
//         death: acc.death + r.deathFemale + r.deathMale,
//         deathFemale: acc.deathFemale + r.deathFemale,
//         deathMale: acc.deathMale + r.deathMale,
//       }),
//       {
//         death: 0,
//         deathFemale: 0,
//         deathMale: 0,
//       }
//     );
//     console.log(_deathBySex);

//     const _chartOption2 = {
//       tooltip: {
//         trigger: "item",
//       },
//       legend: {
//         orient: "vertical",
//         left: "left",
//       },
//       series: [
//         {
//           type: "pie",
//           radius: "50%",
//           data: [
//             { value: _deathBySex.deathMale, name: "ชาย" },
//             { value: _deathBySex.deathFemale, name: "หญิง" },
//           ],
//           emphasis: {
//             itemStyle: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: "rgba(0, 0, 0, 0.5)",
//             },
//           },
//         },
//       ],
//     };
//     setChartOption2(_chartOption2);
//   }, [currentYear, selectedCause]);
//   return {
//     chartOption2,
//     setChartOption2,
//   };
// };
const DeathCause8 = () => {
  const yearLists = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => b - a
  );

  const { currentYear, setCurrentYear, selectedCause, setSelectedCause } =
    useSelectedCause();

  const { totalDeath } = useTotalDeath({ currentYear, selectedCause });

  const { deathByCauses } = useDeathByCause({ currentYear, selectedCause });

  const { deathByProvinces } = useDeathByProvinces({
    currentYear,
    selectedCause,
  });

  const { chartOption1 } = useChartOption1({
    yearLists,
    currentYear,
    selectedCause,
  });

  const { chartOption2 } = useChartOption2({ currentYear, selectedCause });

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2560
      </h1>
      <DeathFilter
        yearLists={yearLists}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <div className="flex space-x-4 mt-4">
        <DeathByCause
          totalDeath={totalDeath}
          deathByCauses={deathByCauses}
          selectedCause={selectedCause}
          setSelectedCause={setSelectedCause}
        />
        <DeathByProvince
          totalDeath={totalDeath}
          deathByProvinces={deathByProvinces}
        />
        <DeathChart chartOption1={chartOption1} chartOption2={chartOption2} />
      </div>
    </div>
  );
};

export default DeathCause8;
