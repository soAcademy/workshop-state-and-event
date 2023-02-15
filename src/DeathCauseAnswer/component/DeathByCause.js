export const DeathByCause = ({ totalDeath, deathByCauses, setSelectedCause }) => (
  <div className="bg-blue-100 w-1/3 p-4 h-screen overflow-auto">
    <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
    <table className="w-full table-auto">
      <tbody>
        <tr
          className="hover:bg-red-100 hover:cursor-pointer"
          onClick={() => setSelectedCause(undefined)}
        >
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByCauses?.map((r, idx) => (
          <tr
            key={idx}
            className="hover:bg-red-100 hover:cursor-pointer"
            onClick={() => setSelectedCause(r.cause)}
          >
            <td>{r.cause}</td>
            <td>{r.death.toLocaleString()}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


