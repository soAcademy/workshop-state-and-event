import Dashboard from "./Dashboard/Dashboard";
import THDeathCause from "./Dashboard/thailand-death-cause.json"

const App = () => {
  const datas = THDeathCause

  return (
    <>
      <Dashboard datas={datas} />
    </>
  );
};

export default App;
