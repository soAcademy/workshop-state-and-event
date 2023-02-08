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

const DeathCause4 = () => {
  const currentYear = "2559";
  const deathCauseDatas = [
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 53,
      causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
      year: 2557,
      deathMale: 384,
      deathFemale: 284,
      deathRatePer100000MalePopulation: 123.2,
      deathRatePer100000FemalePopulation: 89.1,
    },
    {
      provinceKey: 20,
      provinceName: "ชลบุรี",
      pronvinceNameEng: "Chon Buri",
      regionKey: 5,
      region: "ภาคใต้",
      regionEng: "Southern",
      diseaseCauseDeathKey: 3,
      causeOfDeath: "ความดันเลือดสูง และโรคหลอดเลือดในสมอง",
      year: 2557,
      deathMale: 391,
      deathFemale: 306,
      deathRatePer100000MalePopulation: 56.77,
      deathRatePer100000FemalePopulation: 42.67,
    },
    {
      provinceKey: 48,
      provinceName: "นครพนม",
      pronvinceNameEng: "Nakhon Phanom",
      regionKey: 2,
      region: "ภาคกลาง",
      regionEng: "Central",
      diseaseCauseDeathKey: 83,
      causeOfDeath: "โรคระบบสืบพันธุ์ร่วมปัสสาวะ",
      year: 2556,
      deathMale: 110,
      deathFemale: 23,
      deathRatePer100000MalePopulation: 30.98,
      deathRatePer100000FemalePopulation: 6.49,
    },
  ];
  const totalDeath = deathCauseDatas.reduce(
    (acc, r) => acc + r.deathMale + r.deathFemale,
    0
  );
  const deathCauseLists = [
    ...new Set(deathCauseDatas.map((cause) => cause.causeOfDeath)),
  ];
  console.log("deathCauseLists",deathCauseLists);
  const deathByCauses = deathCauseLists.map((cause) => {
    const totalDeath = deathCauseDatas
      .filter((r) => r.causeOfDeath === cause)
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
      // totalDeath = {
      //   death: 1000,
      //   deathFemale: 150,
      //   deathMale: 850
      // }
    return {
      cause,
      death: totalDeath.death,
      deathFemale: totalDeath.deathFemale,
      deathMale: totalDeath.deathMale,
    };
  
  });
  console.log(deathByCauses);

  const provinceLists = [
    ...new Set(deathCauseDatas.map((r) => r.provinceName)),
  ];
  const deathByProvinces = provinceLists.map((province) => {
    const totalDeath = deathCauseDatas
      .filter((r) => r.provinceName === province)
      .reduce(
        (acc, r) => ({
          death: acc.death + r.deathFemale + r.deathMale,
          deathFemale: acc.deathFemale + r.deathFemale,
          deathMale: acc.deathMale + r.deathMale,
        }),
        { death: 0, deathFemale: 0, deathMale: 0 }
      );
      return {
        province,
        death : totalDeath.death,
        deathFemale: totalDeath.deathFemale,
        deathMale: totalDeath.deathMale,
      }
  });
  console.log(deathByProvinces);
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div className="mt-4">ปีพ.ศ. {currentYear}</div>
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

export default DeathCause4;
