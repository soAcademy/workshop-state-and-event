export const DeathsByProvinceTable = ({
  deathsByProvince,
  currentYear,
  selectedCause,
}) => {
  return (
    <div>
      <h2 className="mb-2 text-xl">
        จำนวนผู้เสียชีวิตปี {currentYear}{" "}
        {selectedCause ? `ด้วยสาเหตุ${selectedCause} ` : ""}แยกตามจังหวัด
      </h2>
      <table className="table-auto text-left font-nstl text-sm text-gray-900">
        <tbody>
          <tr className="border-b bg-white">
            <td className="py-2 pr-2">ทั้งหมด</td>
            <td className="px-2 py-2 text-right">
              {/* {totalDeath.toLocaleString("TH")} ={" "} */}
              {deathsByProvince
                .reduce((acc, death) => acc + death.death, 0)
                .toLocaleString("TH")}
            </td>
            <td className="py-2 pl-2 text-right">100.00%</td>
          </tr>
          {deathsByProvince.map((deathByProvince, idx) => (
            <tr key={idx} className="border-b bg-white">
              <td className="py-2 pr-2">
                {deathByProvince.provinceName.toLocaleString("TH")}
              </td>
              <td className="px-2 py-2 text-right">
                {deathByProvince.death.toLocaleString("TH")}
              </td>
              <td className="py-2 pl-2 text-right">
                {(
                  (deathByProvince.death * 100) /
                  deathsByProvince.reduce((acc, death) => acc + death.death, 0)
                )
                  .toFixed(2)
                  .toLocaleString("TH")}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
