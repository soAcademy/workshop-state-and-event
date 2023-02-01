import deathData from "./deathData";
const Dashboard1 = () => {
  const deathData2558 = deathData.filter((i) => i.year === 2558);
  const uniqueCauseOfDeath = [
    ...new Set(deathData2558.map((i) => i.causeOfDeath)),
  ];
  const _deathNumPerCause = uniqueCauseOfDeath.reduce((array, e) => {
    const deathNum = deathData2558
      .filter((i) => i.causeOfDeath === e)
      .reduce((acc, j) => {
        const _deathMale = (acc[j.causeOfDeath]?.deathMale ?? 0) + j.deathMale;
        const _deathFemale =
          (acc[j.causeOfDeath]?.deathMale ?? 0) + j.deathFemale;
        const _totalDeath = _deathMale + _deathFemale;
        acc[j.causeOfDeath] = {
          cause: j.causeOfDeath,
          deathMale: _deathMale,
          deathFemale: _deathFemale,
          totalDeath: _totalDeath,
        };
        return acc;
      }, {});
    return [...array, deathNum];
  }, []);
  const deathNumPerCause = _deathNumPerCause
    .map((e) => Object.values(e))
    .flat();
  const totalDeath = deathData2558.reduce((acc, e) => {
    acc += e.deathMale + e.deathFemale;
    return acc;
  }, 0);
  // console.log("deathNumPerCause :>> ", deathNumPerCause);

  return (
    <div className="font-kanit m-2">
      <div>จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554-2559</div>
      <div>เลือกปี</div>
      <div>ปี2558</div>
      <div className="flex flex-row space-x-4">
        <div className="w-2/5 text-sm border-2 p-2">
          <p className="text-lg font-semibold">สาเหตุการเสียชีวิตปี ''</p>
          <div className="flex flex-row justify-between w-full">
            <div className="w-2/3">ทั้งหมด</div>
            <div className="flex flex-row w-1/3">
              <div className="bg-blue-500 w-1/2 text-right px-2">
                {totalDeath}
              </div>
              <div className="bg-teal-400 w-1/2 px-2">100%</div>
            </div>
          </div>
          {deathNumPerCause.map((e) => {
            console.log("e :>> ", e);
            return (
              <div className="flex flex-row justify-between w-full">
                <div className="w-2/3">{e.cause}</div>
                <div className="flex flex-row w-1/3">
                  <div className="bg-blue-500 w-1/2 text-right px-2">
                    {e.totalDeath}
                  </div>
                  <div className="bg-teal-400 w-1/2 px-2">
                    {(e.totalDeath / totalDeath).toFixed(2)}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-2/5 text-sm border-2 p-2">
          <div className="text-lg font-semibold">
            จำนวนผู้เสียชีวิตแยกตามจังหวัดปี 2558
          </div>
        </div>
        <div className="w-2/5 text-sm border-2 p-2">
          <div className="text-lg font-semibold">แนวโน้มการเสียชีวิต</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
