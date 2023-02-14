export const ByCause = ({
  yearSelected,
  datasByYear,
  sumByYear,
  filCause,
  setFilCause,
}) => {
  // console.log(datasByYear);
  return (
    <div className="causeBlock w-full md:w-5/12 flex flex-col border-2 rounded-lg p-2">
      <h1 className="text-lg font-bold mb-2">
        สาเหตุการเสียชีวิตปี <span className="underline">{yearSelected}</span>
      </h1>

      <button
        onClick={() => setFilCause(undefined)}
        className={`blockCause flex justify-between gap-x-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 p-1`}
      >
        <div className="causeName">ทั้งหมด</div>
        <div className="tbAmount flex gap-x-1">
          <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
            {sumByYear}
          </div>
          <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
            100.00
          </div>
        </div>
      </button>

      {datasByYear
        .filter((r) => r.gender.male + r.gender.female > 0)
        .map((data) => {
          return (
            <button
              key={data.cause}
              onClick={() => setFilCause(data.cause)}
              className={`rounded-lg hover:bg-gray-100 active:bg-gray-200 p-1 ${
                filCause === data.cause && "bg-gray-100"
              }`}
            >
              <div className="blockCause flex justify-between gap-x-2">
                <div className="causeName text-left">{data.cause}</div>
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
            </button>
          );
        })}
    </div>
  );
};
