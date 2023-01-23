import React from "react";

const Event8 = () => {
    const submitData = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    };

    return (
        <div>
            <input className="h-12 border border-red-200 mt-2" id="image1" type="file" accept="image/png, image/jpeg" onChange={(e)=>submitData(e)}/>
        </div>
    )
    }

    export default Event8;