const ByCause = ({ yearSelected, datasByYear, sumByYear }) => {
  return (
    <div className="causeBlock w-full md:w-5/12 flex flex-col border-2 rounded-lg p-4">
      <h1 className="text-lg font-bold mb-2">
        สาเหตุการเสียชีวิตปี {yearSelected}
      </h1>
      <div className="blockCause flex justify-between gap-x-2 mb-1">
        <div className="causeName">ทั้งหมด</div>
        <div className="tbAmount flex gap-x-1">
          <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
            {sumByYear}
          </div>
          <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
            100.00
          </div>
        </div>
      </div>

      {datasByYear.map((data) => {
        return (
          <div key={data.cause}>
            {data.gender.male + data.gender.female > 0 && (
              <div className="blockCause flex justify-between gap-x-2 mb-1">
                <div className="causeName">{data.cause}</div>
                <div className="tbAmount flex gap-x-1">
                  <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
                    {data.gender.male + data.gender.female}
                  </div>
                  <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
                    {(
                      ((data.gender.male + data.gender.female) / sumByYear) *
                      100
                    ).toFixed(2)}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ByCause;
