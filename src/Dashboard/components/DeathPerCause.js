import { useState, useEffect } from "react";

export const DeathPerCause = ({
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
          <div className="my-1 flex w-full flex-row justify-between" key={idx}>
            <div className="w-2/3">{e.cause}</div>
            <div className="flex w-1/3 flex-row justify-center ">
              <div
                className={`w-[${
                  Math.round((e.totalDeath / totalDeath) * 100) + "%"
                }] flex `}
              >
                <div className="w-1/2 bg-blue-500 px-2 text-right">
                  {e.totalDeath.toLocaleString()}
                </div>
                <div className="w-1/2 bg-teal-400 px-2">
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
