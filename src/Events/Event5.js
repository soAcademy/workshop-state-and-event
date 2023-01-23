import React from "react";

const Event5 = () => {
    return (
        <div className="my-2 bg-blue-200 h-64"
        onMouseOver={() => console.log("Hello 5")}
        onMouseLeave={() => console.log("Exit 5")}>
        Hover me
        </div>
    )
}

export default Event5;