const DeathCauseByDisease = (props) => {
  const { deathByCauses, totalDeath } = props;

  return (
    <div className="bg-sky-500 w-1/3 p-4">
      <div className="font-bold">Causes of Death in 2015</div>
      <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByCauses.map((r) => (
            <tr>
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

const DeathCauseByProvince = (props) => {
  const { deathByProvinces, totalDeath } = props;

  return (
    <div className="bg-teal-300 w-1/3 p-4">
      <div className="font-bold">Number of Death By Province in 2015</div>
      <div className="font-bold mb-2">สาเหตุการเสียชีวิตตามจังหวัด</div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByProvinces?.map((r) => (
            <tr>
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

const DeathChart = () => (
  <div className="bg-red-300 w-1/3 p-4">
    <div>Likelihood of Death</div>
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

  const deathCauseLists = [
    ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
  ];
  console.log("deathCauseLists", deathCauseLists);
  const deathByCauses = deathCauseLists.map((cause) => {
    const deathCause2 = deathCauseDatas.filter((r) => r.causeOfDeath === cause);
    console.log("deathCause2", deathCause2);
    const TotalDeathCause = deathCause2.reduce(
      (acc, r) => {
        acc.deathFemale += r.deathFemale;
        acc.deathMale += r.deathMale;
        return acc;
      },
      { deathFemale: 0, deathMale: 0 }
    );
    return {
      cause: cause,
      deathFemale: TotalDeathCause.deathFemale,
      deathMale: TotalDeathCause.deathMale,
      death: TotalDeathCause.deathFemale + TotalDeathCause.deathMale,
    };
  });

  const provinceLists = [
    ...new Set(deathCauseDatas.map((r) => r.provinceName)),
  ];
  console.log("provinceLists", provinceLists);
  const deathByProvinces = provinceLists.map((province) => {
    const province2 = deathCauseDatas.filter(
      (r) => r.provinceName === province
    );
    console.log("province2", province2);
    const TotalDeathProvince = province2.reduce(
      (acc, r) => {
        acc.deathFemale += r.deathFemale;
        acc.deathMale += r.deathMale;
        return acc;
      },
      { deathFemale: 0, deathMale: 0 }
    );
    return {
      province: province,
      deathFemale: TotalDeathProvince.deathFemale,
      deathMale: TotalDeathProvince.deathMale,
      death: TotalDeathProvince.deathFemale + TotalDeathProvince.deathMale,
    };
  });
  // const numberProvinceSorted = deathByProvince.sort(
  //   (a, b) => b.totalDeathByProvince - a.totalDeathByProvince
  // );

  return (
    <div className="p-4">
      <h1> จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559</h1>
      <h2>ปีพ.ศ. {currentYear}</h2>
      <div className="flex space-x-4">
        <DeathCauseByDisease
          deathByCauses={deathByCauses}
          totalDeath={totalDeath}
        />
        <DeathCauseByProvince
          deathByProvinces={deathByProvinces}
          totalDeath={totalDeath}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause4;
