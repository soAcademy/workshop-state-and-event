export const DeathsByCauseTable = ({
  totalDeath,
  deathsByCause,
  currentYear,
  setSelectedCause,
}) => {
  const handleCauseButtonClick = (cause) => {
    setSelectedCause(cause);
  };

  return (
    <div>
      <h2 className="mb-2 text-xl">สาเหตุการเสียชีวิตปี {currentYear}</h2>
      <table className="table-auto text-left font-nstl text-sm text-gray-900">
        <tbody>
          <tr className="border-b bg-white">
            <td className="py-2 pr-2">
              <button
                className="text-left"
                onClick={() => handleCauseButtonClick("")}
              >
                ทั้งหมด
              </button>
            </td>
            <td className="px-2 py-2 text-right">
              {totalDeath.toLocaleString("TH")}
            </td>
            <td className="py-2 pl-2 text-right">100.00%</td>
          </tr>
          {deathsByCause.map((deathByCause, idx) => (
            <tr key={idx} className="border-b bg-white">
              <td className="py-2 pr-2">
                <button
                  className="text-left"
                  onClick={() =>
                    handleCauseButtonClick(deathByCause.causeOfDeath)
                  }
                >
                  {deathByCause.causeOfDeath}
                </button>
              </td>
              <td className="px-2 py-2 text-right">
                {deathByCause.death.toLocaleString("TH")}
              </td>
              <td className="py-2 pl-2 text-right">
                {((deathByCause.death * 100) / totalDeath)
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
