<<<<<<< HEAD
import Dashboard1 from "./Dashboard/Dashboard1";
import Dashboard2 from "./Dashboard/Dashboard2";
import Dashboard3 from "./Dashboard/Dashboard3";
import THDeathCause from "./Dashboard/thailand-death-cause.json";
=======
import State3 from "./StatesAnswer/State3";
import LocalStorage1 from "./LocalStorageAnswer/LocalStorage1";
import LocalStorage2 from "./LocalStorageAnswer/LocalStorage2";
import LocalStorage3 from "./LocalStorageAnswer/LocalStorage3";
import LocalStorage4 from "./LocalStorageAnswer/LocalStorage4";
import ToDoList1 from "./ToDoListAnswers/ToDoList1";
import ToDoList2 from "./ToDoListAnswers/ToDoList2";
import ToDoList3 from "./ToDoListAnswers/ToDoList3";
import ToDoList4 from "./ToDoListAnswers/ToDoList4";
import ToDoList5 from "./ToDoListAnswers/ToDoList5";
import Chart1 from "./ChartsAnswer/Chart1";
import Chart2 from "./ChartsAnswer/Chart2";
import Chart3 from "./ChartsAnswer/Chart3";
import Accordian1 from "./AccordiansAnswer/Accordian1";
import Accordian2 from "./AccordiansAnswer/Accordian2";
import Accordian3 from "./AccordiansAnswer/Accordian3";
>>>>>>> 8ffaec18e29761a492f03a821d0ac01668adfe24

const App = () => {
  const datas = THDeathCause;

  return (
    <>
<<<<<<< HEAD
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

=======
      {/* <State3 /> */}
      {/* <LocalStorage1 /> */}
      {/* <LocalStorage2 /> */}
      {/* <LocalStorage3 data1="bin" data2="hello"/> */}
      {/* <LocalStorage4 /> */}
      {/* <ToDoList1 /> */}
      {/* <ToDoList2 /> */}
      {/* <ToDoList3 /> */}
      {/* <ToDoList4 /> */}
      {/* <ToDoList5 /> */}
      {/* <Chart1 /> */}
      {/* <Chart2 /> */}
      {/* <Chart3 /> */}
      {/* <Accordian1 /> */}
      <Accordian2 />
      {/* <Accordian3 /> */}
>>>>>>> 8ffaec18e29761a492f03a821d0ac01668adfe24
    </>
  );
};

export default App;
