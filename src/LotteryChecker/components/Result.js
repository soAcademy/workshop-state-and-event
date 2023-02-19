export const Result = ({ queryNumbers, result, sumResult }) => {
  return (
    <div className="my-4 w-11/12 md:w-3/4 rounded-md bg-gradient-to-t from-slate-100 md:px-8 py-4">
      {queryNumbers?.map((number, idx) => {
        return result?.findIndex((result) => result.number === number) !==
          -1 ? (
          result
            ?.filter((e) => e.number === number)
            .map((data, jdx) => {
              return (
                <div key={jdx} className="mx-auto flex md:w-3/4 justify-between px-8 md:px-5">
                  <p className="md:w-1/2">{data.number}</p>
                  <p className="md:w-1/2">{data.text}</p>
                </div>
              );
            })
        ) : (
          <div key={idx} className="mx-auto flex md:w-3/4 justify-between px-8 md:px-5">
            <p className="md:w-1/2">{number}</p>
            <p className="md:w-1/2">เสียใจด้วย คุณถูกกิน 55555</p>
          </div>
        );
      })}

      {sumResult !== 0 && (
        <p className="my-2 text-center text-lg md:text-xl ">
          คุณถูกหวยงวดนี้ทั้งสิ้น {sumResult.toLocaleString("TH")} บาท
        </p>
      )}
    </div>
  );
};
