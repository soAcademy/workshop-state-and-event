import React, { useState } from "react";

const RenderComponent = ({counterData }) => <div>Counter: {counterData}</div>;
const Prop3 = () => {
    const [counter, setCounter] = useState(0);

    return (
      <>
        <div>
          กดแล้วเลขจะเพิ่มนะ
        <RenderComponent counterData={counter} />
        <button className="p-4 bg-blue-300 rounded-lg " onClick={() => setCounter(counter + 1)}>
          PressMe!
        </button>
        </div>
      </>
    );
};
export default Prop3;






