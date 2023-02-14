const CausesOfDeath = (props) => {
  const { totalDeath, deathByCauses } = props;
  return (
    <div className="bg-red-300 w-1/3">
      <div className="font-bold m-4 ">Causes of Death</div>
      <table className="w-full m-4">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByCauses.map((r, idx) => (
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
};

const DeathByProvince = (props) => {
  const { deathByProvinces, totalDeath } = props;
  return (
    <div className="bg-yellow-300 w-1/3">
      <div className="font-bold m-4 ">Number of Deaths by Province</div>
      <table className="w-full m-4">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByProvinces.map((r, idx) => (
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
};

const DeathChart = () => {
  return (
    <div className="bg-green-300 w-1/3">
      <div>Records of Death</div>
    </div>
  );
};
const DeathCause2_4 = () => {
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

  const causeOfDeathList = [
    ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
  ];
  console.log("causeofDeathList", causeOfDeathList);
  const deathByCauses = causeOfDeathList.map((cause) => {
    const causeOfDeathFiltered = deathCauseDatas.filter(
      (r) => r.causeOfDeath === cause
    );
    console.log("causeOfDeathFiltered", causeOfDeathFiltered);
    const totalDeathCause = causeOfDeathFiltered.reduce(
      (acc, r) => {
        acc.deathFemale += r.deathFemale;
        acc.deathMale += r.deathMale;
        return acc;
      },
      { deathFemale: 0, deathMale: 0 }
    );

    return {
      cause, 
      deathMale: totalDeathCause.deathMale,
      deathFemale: totalDeathCause.deathFemale,
      death: totalDeathCause.deathMale + totalDeathCause.deathFemale,
    };
  });

  const deathByProvinceList = [
    ...new Set(deathCauseDatas.map((r) => r.provinceName)),
  ];
  // console.log("causeofDeathList", causeOfDeathList)
  const deathByProvinces = deathByProvinceList.map((province) => {
    const deathByProvinceFiltered = deathCauseDatas.filter(
      (r) => r.provinceName === province
    );
    // console.log("causeOfDeathFiltered", causeOfDeathFiltered)
    const totalDeathByProvince = deathByProvinceFiltered.reduce(
      (acc, r) => {
        acc.deathFemale += r.deathFemale;
        acc.deathMale += r.deathMale;
        return acc;
      },
      { deathFemale: 0, deathMale: 0 }
    );
  console.log("totalDeathByProvince", totalDeathByProvince)
    return {
      province, 
      deathMale: totalDeathByProvince.deathMale,
      deathFemale: totalDeathByProvince.deathFemale,
      death: totalDeathByProvince.deathMale + totalDeathByProvince.deathFemale,
    };
   
  });

  const totalDeath = deathCauseDatas.reduce(
    (acc, r) => acc = acc + r.deathMale + r.deathFemale,
    0
  );
 
  console.log("totalDeath", totalDeath)

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        Total Number of Deaths and Causes of Death from 2554 - 2559
      </h1>
      <h2 className="mt-4 ">ปี พ.ศ {currentYear}</h2>
      <div className="flex space-x-4 mt-4 ">
        <CausesOfDeath totalDeath={totalDeath} deathByCauses={deathByCauses} />
        <DeathByProvince
          deathByProvinces={deathByProvinces}
          totalDeath={totalDeath}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause2_4;
