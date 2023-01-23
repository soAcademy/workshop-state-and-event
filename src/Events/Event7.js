import React from "react";

const Event7 = () => {
    const submitData = (e) => {

        e.preventDefault();
        const data = {
            name: e.target[0].value,
            tel: e.target[1].value,
            email: e.target[2].value,
        }
        console.log(data);
    }
    return (
        <form className="m-2 bg-blue-100" onSubmit={(e) => submitData(e)}>
        <div>
            <input className="h-12 border border-red-200 mt-2" placeholder="ชื่อ" id="name" required/>
        </div>
        <div>
            <input className="h-12 border border-red-200 mt-2" placeholder="tel" id="tel"/>
        </div>
        <div>
            <input className="h-12 border border-red-200 mt-2" placeholder="email" id="email"/>
        </div>
        <button className="bg-red-300 p-4">Submit</button>
        </form>
        )
}

export default Event7;