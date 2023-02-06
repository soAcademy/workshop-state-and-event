import { useState, useEffect } from "react";

const DeathPerCause = ({
  deathDataFiltered,
  uniqueCauseOfDeath,
  totalDeath,
}) => {
  const [deathNumPerCause, setDeathNumPerCause] = useState([]);

  useEffect(() => {
    const _deathNumPerCause = uniqueCauseOfDeath.map((e) => {
      const deathNum = deathDataFiltered
        .filter((i) => i.causeOfDeath === e)
        .reduce((acc, j) => {
          const _deathMale =
            (acc[j.causeOfDeath]?.deathMale ?? 0) + j.deathMale;
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
      return deathNum;
    }, []);

    setDeathNumPerCause(
      _deathNumPerCause
        .map((e) => Object.values(e))
        .flat()
        .sort((a, b) => b.totalDeath - a.totalDeath)
    );
  }, [uniqueCauseOfDeath]);
  return (
    <>
      {deathNumPerCause.map((e, idx) => {
        return (
          <div className="flex flex-row justify-between w-full my-1" key={idx}>
            <div className="w-2/3">{e.cause}</div>
            <div className="flex flex-row w-1/3 justify-center ">
              <div className={`w-[${Math.round(((e.totalDeath / totalDeath) * 100))+'%'}] flex ` }>
                <div className="bg-blue-500 w-1/2 text-right px-2">
                  {e.totalDeath.toLocaleString()}
                </div>
                <div className="bg-teal-400 w-1/2 px-2">
                  {((e.totalDeath / totalDeath) * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DeathPerCause;
