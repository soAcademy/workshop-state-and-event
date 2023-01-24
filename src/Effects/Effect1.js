import {useState, useEffect} from 'react';

const Effect1 = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);

    document.title = `Counter: ${counter}`;

  },[counter]);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="m-2">
        <p className="text-center">{`Counter: ${counter}`}</p>
        <button
          type="button"
          className="bg-red-200 rounded-lg shadow-md active:bg-red-300 active:shadow-lg p-2 mt-4"
          onClick={() => setCounter(counter + 1)}
        >
          Click + 1
        </button>
      </div>
    </div>
  );
};

export default Effect1;