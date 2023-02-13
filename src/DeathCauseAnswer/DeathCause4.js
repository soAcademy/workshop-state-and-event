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
    (acc, r) => acc + r.deathMale + r.deathFemale, //Question
    0
  );
console.log("totalDeath:",totalDeath);

  // const deathByCauses = [
  //   {
  //     cause: "วัณโรคทุกชนิด",
  //     death: 189000,
  //   },
  //   {
  //     cause: "เบาหวาน",
  //     death: 130000,
  //   },
  // ];

  const deathCauseLists = [
    ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
  ];
  console.log("deathCauseLists:",deathCauseLists);

  const deathByCauses = deathCauseLists.map((cause) => {
    const totalDeath = deathCauseDatas
      .filter((r) => r.causeOfDeath === cause)
      .reduce(
        (acc, r) => ({
          death: acc + r.deathFemale + r.deathMale, //Question
          deathFemale: acc + r.deathFemale, //Question
          deathMale: acc + r.deathMale, //Question
        }),
        
        0
  
      );
    return {
      cause,
      death: totalDeath.death,
      deathFemale: totalDeath.deathFemale,
      deathMale: totalDeath.deathMale,
    };
  });
  console.log("deathByCauses",deathByCauses);

  const provinceLists = [
    ...new Set(deathCauseDatas.map((r) => r.provinceName)),
  ];
  console.log("provinceLists",provinceLists);

  // const deathByProvinces = [
  //   {
  //     province: "กรุงเทพมหานคร",
  //     death: 189000,
  //   },
  //   {
  //     province: "เชียงใหม่",
  //     death: 109000,
  //   },
  // ];

  const deathByProvinces = provinceLists.map((province) => {
    const totalDeath = deathCauseDatas
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
      death: totalDeath.death,
      deathFemale: totalDeath.deathFemale,
      deathMale: totalDeath.deathMale,
    };
  });
  console.log("deathByProvinces",deathByProvinces);

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
