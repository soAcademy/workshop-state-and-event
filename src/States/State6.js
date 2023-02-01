import React, { useState } from "react";

const State6 = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);
    console.log("number1:",number1)
    return(
        <div className="">
            <div>
                Input1: {number1}
                <input type="number" className="border bg-red-300" onChange={(e) => setNumber1(e.target.value)}/>
            </div>
            <div>
                Input2: {number2}
                <input type="number" className="border bg-yellow-300" onChange={(e) => setNumber2(e.target.value)}/>
            </div>
            <div>
                Sum: {sum}
                <button className="p-4 bg-green-200" onClick={(e) => setSum(Number(number1)+Number(number2))}>
                    Calculate
                </button>
            </div>
        </div>
    )
}

export default State6;