const FxStat = ({ from, to, stats }) => {
  return (
    <>
      {stats ? (
        <div className="grid w-full grid-cols-2">
          <div className="my-4">
            <p>1 วัน</p>
            <h1 className="text-xl font-bold">
              1 {from} = {stats["last1Days"]?.average} {to}
            </h1>
            <p>
              1 {to} = {(1 / stats["last1Days"]?.average).toFixed(6)} {from}
            </p>
          </div>
          <div className="my-4">
            <p>7 วัน</p>
            <h1 className="text-xl font-bold">
              1 {from} = {stats["last7Days"]?.average} {to}
            </h1>
            <p>
              1 {to} = {(1 / stats["last7Days"]?.average).toFixed(6)} {from}
            </p>
          </div>
          <div className="my-4">
            <p>30 วัน</p>
            <h1 className="text-xl font-bold">
              1 {from} = {stats["last30Days"]?.average} {to}
            </h1>
            <p>
              1 {to} = {(1 / stats["last30Days"]?.average).toFixed(6)}
              {from}
            </p>
          </div>
          <div className="my-4">
            <p>60 วัน</p>
            <h1 className="text-xl font-bold">
              1 {from} = {stats["last60Days"]?.average} {to}
            </h1>
            <p>
              1 {to} = {(1 / stats["last60Days"]?.average).toFixed(6)} {from}
            </p>
          </div>
        </div>
      ) : (
        <p>
          Unable to retrieve fresh rates at this time. Please try again later.
        </p>
      )}
    </>
  );
};

export default FxStat;
