import { useState } from "react"


const State1 = () => {
  const [state, setState] = useState("Bin")
  const click = () => {
    setState("Jam")
    console.log({state})
  }
  return (
    <button onClick={click} className="bg-gray-300 rounded-lg p-2 m-2">State1
    </button>
  )
}

export default State1