import React from "react";

function Event6() {
  return (
    <input
      className="my-6 py-3 bg-sky-400 border border-black text-lg"
      onSelect={() => console.log("Hello 6")}
      placeholder="Text on me !"
    />
  );
}

export default Event6;
