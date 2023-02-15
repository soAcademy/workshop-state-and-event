export const DeathFilter = ({ yearLists, currentYear, setCurrentYear }) => (
  <div>
    <div className="mt-4">
      เลือกปีพ.ศ.{" "}
      <select
        onChange={(e) => setCurrentYear(e.target.value)}
        value={currentYear}
      >
        {yearLists.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
    <div className="">การเสียชีวิตของปีพ.ศ. {currentYear}</div>
  </div>
);
