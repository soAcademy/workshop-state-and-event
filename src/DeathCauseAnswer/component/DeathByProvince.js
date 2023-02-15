export const DeathByProvince = ({ totalDeath, deathByProvinces }) => (
  <div className="bg-amber-100 w-1/3 p-4 h-screen overflow-auto">
    <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
    <table className="w-full table-auto">
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

