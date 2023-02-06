const DashboardTable = (props) => {
  console.log("DashboardTable props", props);
  console.log(" DashboardTable props.data", props.data);
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>สาเหตุการเสียชีวิตปี {props.year}</tr>
        </thead>
        <tbody>
          {props.data?.map((r) => (
          
            <tr className="space-y-1">
              <td className="">{r.name} </td>
              <td className="bg-blue-500 w-[100px] text-white text-right">{r.totalDeath}</td>
              <td className="bg-green-500 w-[100px] text-white">{((r.totalDeath / props.totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          
          ))}
        </tbody>
      </table>
    </>
  );
};
export default DashboardTable;
