const ByProvince = ({ yearSelected, datasByProveince, sumByProvince }) => {
  return (
    <div className="provinceBlock w-full md:w-3/12 flex flex-col border-2 rounded-lg p-4">
      <h1 className="text-lg font-bold mb-2">
        จำนวนผู้เสียชีวิตแยกตามจังหวัดปี {yearSelected}
      </h1>
      <div className="blockCause flex justify-between gap-x-2 mb-1">
        <div className="provinceName">ทั้งหมด</div>
        <div className="tbAmount flex gap-x-1">
          <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
            {sumByProvince}
          </div>
          <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
            100.00
          </div>
        </div>
      </div>

      {datasByProveince.map((data) => {
        return (
          <div key={data.province}>
            {data.amount > 0 && (
              <div className="blockCause flex justify-between gap-x-2 mb-1">
                <div className="provinceName truncate">{data.province}</div>
                <div className="tbAmount flex gap-x-1">
                  <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
                    {data.amount}
                  </div>
                  <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
                    {((data.amount / sumByProvince) * 100).toFixed(2)}
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

export default ByProvince;
