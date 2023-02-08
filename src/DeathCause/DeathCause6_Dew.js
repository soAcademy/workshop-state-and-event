import { useState, useEffect } from "react";
import thailandDeathCause from "../DeathCauseAnswer/thailand-death-cause.json";

const DeathByCause = ({ totalDeath, deathByCauses }) => (
  <div className="bg-blue-100 w-1/3 p-4">
    <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByCauses?.map((r, idx) => (
          <tr key={idx}>
            <td>{r.cause}</td>
            <td>{r.death.toLocaleString()}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DeathByProvince = ({ totalDeath, deathByProvinces }) => (
  <div className="bg-amber-100 w-1/3 p-4">
    <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces?.map((r, idx) => (
          <tr key={idx}>
            <td>{r.province}</td>
            <td>{r.death.toLocaleString()}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DeathChart = () => (
  <div className="bg-green-100 w-1/3 p-4">
    <div className="font-bold mb-2">แนวโน้มการเสียชีวิต</div>
  </div>
);

const DeathFilter = ({ yearLists, currentYear, setCurrentYear }) => {
  return (
    <div>
      <div className="mt-4">
        เลือกปีพ.ศ.
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
      <div>การเสียชีวิตของปีพ.ศ.{currentYear}</div>
    </div>
  );
};

const DeathCause6 = () => {
  const yearLists = [...new Set(thailandDeathCause.map((r) => r.year))].sort(
    (a, b) => a - b
  );
  const [currentYear, setCurrentYear] = useState(2559);
  const [totalDeath, setTotalDeath] = useState(0);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);

  useEffect(() => {
    const deathCauseDatas = thailandDeathCause.filter(
      (r) => r.year == currentYear
    );

    const _totalDeath = deathCauseDatas.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );
    const deathCauseLists = [
      ...new Set(deathCauseDatas.map((cause) => cause.causeOfDeath)),
    ];
    console.log("deathCauseLists", deathCauseLists);
    const _deathByCauses = deathCauseLists.map((cause) => {
      const totalDeath = thailandDeathCause
        .filter((r) => r.causeOfDeath === cause)
        // console.log("totalDeath by cause",totalDeath)
        .reduce(
          (acc, r) => ({
            death: acc.death + r.deathFemale + r.deathMale,
            deathFemale: acc.deathFemale + r.deathFemale,
            deathMale: acc.deathMale + r.deathMale,
          }),
          {
            death: 0,
            deathFemale: 0,
            deathMale: 0,
          }
        );

      return {
        cause,
        death: totalDeath.death,
        deathFemale: totalDeath.deathFemale,
        deathMale: totalDeath.deathMale,
      };
    }).filter((r)=>r.death >0).sort((a,b)=>b.death-a.death)
    console.log("deathByCause", _deathByCauses);

    const provinceLists = [
      ...new Set(thailandDeathCause.map((r) => r.provinceName)),
    ];
    const _deathByProvinces = provinceLists.map((province) => {
      const totalDeath = thailandDeathCause
        .filter((r) => r.provinceName === province)
        // console.log("filter",totalDeath);
        .reduce(
          (acc, r) => ({
            death: acc.death + r.deathFemale + r.deathMale,
            deathFemale: acc.deathFemale + r.deathFemale,
            deathMale: acc.deathMale + r.deathMale,
          }),
          { death: 0, deathFemale: 0, deathMale: 0 }
        );
      console.log("totalDeath after reduce", totalDeath);
      return {
        province,
        death: totalDeath.death,
        deathFemale: totalDeath.deathFemale,
        deathMale: totalDeath.deathMale,
      };
    }).filter((r)=>r.death >0).sort((a,b)=>b.death-a.death)
    console.log(deathByProvinces);

    setTotalDeath(_totalDeath);
    setDeathByCauses(_deathByCauses);
    setDeathByProvinces(_deathByProvinces);
  }, [currentYear]);
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <DeathFilter
        yearLists={yearLists}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <div className="flex space-x-4 mt-4">
        <DeathByCause totalDeath={totalDeath} deathByCauses={deathByCauses} />
        <DeathByProvince
          totalDeath={totalDeath}
          deathByProvinces={deathByProvinces}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause6;
