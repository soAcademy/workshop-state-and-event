const DeathByCause = ({ currentYear, deathByCauses, totalDeath }) => (
  <div className="bg-gray-100 w-1/3 mr-2 p-2">
    <div className="text-center font-bold mb-2">
      สาเหตุการเสียชีวิตปี {currentYear}
    </div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath}</td>
          <td>100%</td>
        </tr>
        {deathByCauses.map((r) => (
          <tr>
            <td>{r.cause}</td>
            <td>{r.death}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DeathByProvince = ({ currentYear, deathByProvinces, totalDeath }) => (
  <div className="bg-gray-200 w-1/3 mx-2 p-2">
    <div className="text-center font-bold mb-2">
      จำนวนผู้เสียชีวิตแยกตามจังหวัดปี {currentYear}
    </div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces.map((r) => (
          <tr>
            <td>{r.province}</td>
            <td>{r.death}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DeathChart = () => (
  <div className="bg-gray-300 w-1/3 ml-2 p-2">
    <div className="text-center font-bold mb-2">แนวโน้มการเสียชีวิต</div>
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
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 116,
      causeOfDeath: "อุบัติเหตุจากการขนส่ง",
      year: 2557,
      deathMale: 104,
      deathFemale: 24,
      deathRatePer100000MalePopulation: 33.4,
      deathRatePer100000FemalePopulation: 7.5,
    },
    {
      provinceKey: 96,
      provinceName: "นราธิวาส",
      pronvinceNameEng: "Narathiwat",
      regionKey: 4,
      region: "ภาคตะวันออกเฉียงเหนือ",
      regionEng: "Northeastern",
      diseaseCauseDeathKey: 20,
      causeOfDeath: "อื่นๆ",
      year: 2559,
      deathMale: 0,
      deathFemale: 0,
      deathRatePer100000MalePopulation: 0,
      deathRatePer100000FemalePopulation: 0,
    },
  ];

  const totalDeath = deathCauseDatas.reduce(
    (acc, r) => acc + r.deathMale + r.deathFemale,
    0
  );
  console.log("totalDeath", totalDeath);

  const causeList = [...new Set(deathCauseDatas.map((r) => r.causeOfDeath))];
  console.log("causeList", causeList);

  const deathByCauses = causeList.map((cause) => {
    const sum = deathCauseDatas
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
    return {
      cause,
      death: sum.death,
      deathFemale: sum.deathFemale,
      deathMale: sum.deathMale,
    };
  });
  console.log("deathByCauses", deathByCauses);

  const provinceList = [...new Set(deathCauseDatas.map((r) => r.provinceName))];
  console.log("provinceList", provinceList);

  const deathByProvinces = provinceList.map((province) => {
    const sum = deathCauseDatas
      .filter((r) => r.provinceName === province)
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
      province,
      death: sum.death,
      deathFemale: sum.deathFemale,
      deathMale: sum.deathMale,
    };
  });
  console.log("deathByProvinces", deathByProvinces);
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div className="mt-4">ปี {currentYear}</div>
      <div className="flex mt-4">
        <DeathByCause
          currentYear={currentYear}
          deathByCauses={deathByCauses}
          totalDeath={totalDeath}
        />
        <DeathByProvince
          currentYear={currentYear}
          deathByProvinces={deathByProvinces}
          totalDeath={totalDeath}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause4;
