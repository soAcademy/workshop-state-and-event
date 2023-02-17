export const Result = ({ queryNumbers, result, sumResult }) => {
  return (
    <div className=" my-4 w-3/4 rounded-md bg-gradient-to-t from-slate-100 px-8 py-4">
      {queryNumbers?.map((number, idx) => {
        return result?.findIndex((result) => result.number === number) !==
          -1 ? (
          result
            ?.filter((e) => e.number === number)
            .map((data, jdx) => {
              return (
                <div key={jdx} className="mx-auto flex w-1/2 justify-between ">
                  <p className="w-1/4">{data.number}</p>
                  <p className="w-3/4">{data.text}</p>
                </div>
              );
            })
        ) : (
          <div key={idx} className="mx-auto flex w-1/2 justify-between">
            <p className="w-1/4">{number}</p>
            <p className="w-3/4">เสียใจด้วย คุณถูกกิน 55555</p>
          </div>
        );
      })}

      {sumResult !== 0 && (
        <p className="my-2 text-center text-xl ">
          คุณถูกหวยงวดนี้ทั้งสิ้น {sumResult.toLocaleString("TH")} บาท
        </p>
      )}
    </div>
  );
};
