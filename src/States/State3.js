import { useState } from "react"

const State3 = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="bg-gray-300 w-fit rounded-lg p-2 flex flex-col items-center m-2">
      <p className="mx-auto">STATE3 : Increase / Decrease Counter</p>
      <button onClick={() => setCounter(counter+1)} className="p-2 m-2 bg-gray-400 w-1/2 rounded-lg font-bold shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500">Increase</button>
      <button onClick={() => setCounter(counter-1)} className="p-2 m-2 bg-gray-400 w-1/2 rounded-lg font-bold shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500">Decrease</button>
      {counter}
    </div>
  )
}

export default State3