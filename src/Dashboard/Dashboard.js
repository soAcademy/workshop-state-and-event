import DeathCausesData from "./thailand-death-cause.json";

const Dashboard1 = () => {
  const data = DeathCausesData;
  const deathcausesList = [...new Set(data.map((r) => causeOfDeath))];
  const deathByCauses = deathcausesList.map((deathcause) => {
    const filteredData = deathcausesList.filter(
      (r) => r.deathcause === deathcause
    );
    const sum = filteredData.reduce(
      (acc, r) => {
        acc.deathMale += r.deathMale;
        acc.deathFemale += r.deathFemale;
        return acc;
      },
      { deathMale: 0, deathFemale: 0 }
    );
    return {
      causeOfDeath: deathcause,
      deathMale: sum.deathMale,
      deathFemale: sum.deathFemale,
      death: sum.deathMale + sum.deathFemale,
    };
  });
  // [
  //   {
  //     causeOfDeath: "เบาหวาน",
  //     deathMale: 100,
  //     deathFemale: 200,
  //     death: 300
  //   }
  // ]

  return (
    <table>
      {deathByCauses?.map((r) => (
        <tr>
          <td>{r.causeOfDeath}</td>
          <td>{r.death}</td>
        </tr>
      ))}
    </table>
  );
};
