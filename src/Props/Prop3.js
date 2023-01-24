import { useState } from "react";

const RenderComponent = (props) => <div>{props.dataCnt}</div>;

const Prop3 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="text-center">
        <RenderComponent dataCnt={counter} />
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-green-100 active:bg-green-300 border-2 border-green-300 rounded-lg font-bold shadow-md active:shadow-lg py-2 px-3"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Prop3;
