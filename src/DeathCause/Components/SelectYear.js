export const SelectYear = ({ yearSelected, setYearSelected, yearsList }) => {
  return (
    <div className="selectYear w-full flex items-center gap-x-2">
      <label htmlFor="selectYear" className="text-sm">
        เลือกปี พ.ศ.
      </label>
      <select
        id="selectYear"
        className="w-fit border-2 text-sm rounded-lg p-1"
        value={yearSelected}
        onChange={(e) => setYearSelected(Number(e.target.value))}
      >
        {yearsList.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
};
