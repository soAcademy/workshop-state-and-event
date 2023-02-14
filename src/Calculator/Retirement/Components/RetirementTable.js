export const RetirementTable = ({ result }) => {
  return (
    <div className="m-10 mx-auto w-2/3 rounded-xl border bg-blue-100">
      <table className="m-5 mx-auto w-full">
        <thead className="border-b-2">
          <tr>
            <td
              className="border-slate-500 text-center text-xl font-bold"
              width={"10%"}
            >
              อายุ
            </td>
            <td
              className="border-slate-500  text-center text-xl font-bold"
              width={"45%"}
            >
              ค่าใช้จ่ายต่อปี
            </td>
            <td
              className="border-slate-500  text-center text-xl font-bold"
              width={"45%"}
            >
              พอร์ทการลงทุน
            </td>
          </tr>
        </thead>
        <tbody>
          {result.map((e, idx) => {
            return (
              <tr key={idx}>
                <td
                  className={`${
                    idx % 2 === 0 ? "bg-slate-100" : "bg-slate-50"
                  } text-center`}
                >
                  {e.age}
                </td>
                <td
                  className={`${
                    idx % 2 === 0 ? "bg-slate-100" : "bg-slate-50"
                  } text-center`}
                >
                  {Number(e.cost).toLocaleString()}
                </td>
                <td
                  className={`${
                    idx % 2 === 0 ? "bg-slate-100" : "bg-slate-50"
                  } text-center`}
                >
                  {Number(e.port).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

