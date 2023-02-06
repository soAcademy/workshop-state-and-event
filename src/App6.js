import Dashboard1 from "./Dashboard/Dashboard1";
import Dashboard2 from "./Dashboard/Dashboard2";
import Dashboard3 from "./Dashboard/Dashboard3";
import THDeathCause from "./Dashboard/thailand-death-cause.json";

const App = () => {
  const datas = THDeathCause;

  return (
    <>
      <div>
        {/* <h1>จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559</h1>
      </div>
      <div>
        <label for="cars">Choose a car:</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="flex">
        <Dashboard1 datas={datas} />
        <Dashboard2 datas={datas} /> */}
      </div>
      <Dashboard3/>

    </>
  );
};

export default App;
