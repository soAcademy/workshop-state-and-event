import { useState, useEffect } from "react";

export const DeathPerProvince = ({
  deathDataFiltered,
  uniqueProvince,
  totalDeath,
}) => {
  const [deathNumPerProvince, setDeathNumPerProvince] = useState([]);

  useEffect(() => {
    const _deathNumPerProvince = uniqueProvince.map((e) => {
      const deathNum = deathDataFiltered
        .filter((i) => i.provinceName === e)
        .reduce((acc, j) => {
          const _deathMale =
            (acc[j.provinceName]?.deathMale ?? 0) + j.deathMale;
          const _deathFemale =
            (acc[j.provinceName]?.deathMale ?? 0) + j.deathFemale;
          const _totalDeath = _deathMale + _deathFemale;
          acc[j.provinceName] = {
            provinceName: j.provinceName,
            deathMale: _deathMale,
            deathFemale: _deathFemale,
            totalDeath: _totalDeath,
          };
          return acc;
        }, {});
      return deathNum;
    });

    setDeathNumPerProvince(
      _deathNumPerProvince
        .map((e) => Object.values(e))
        .flat()
        .sort((a, b) => b.totalDeath - a.totalDeath)
    );
  }, [uniqueProvince]);
  return (
    <>
      {deathNumPerProvince.map((e, idx) => {
        return (
          <div className="my-1 flex w-full flex-row justify-between" key={idx}>
            <div className="w-1/2">{e.provinceName}</div>
            <div className="flex w-1/2 flex-row">
              <div className="w-1/2 bg-blue-500 px-2 text-right">
                {e.totalDeath}
              </div>
              <div className="w-1/2 bg-teal-400 px-2">
                {((e.totalDeath / totalDeath) * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
