import React from "react";

const Event7 = () => {
  const submitData = (e) => {
    
    e.preventDefault();  // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
    const data = {
      name: e.target[0].value,
      tel: e.target[1].value,
      email: e.target[2].value
    }
    console.log(data);
  };

  return (
    <form className="m-2 bg-gradient-to-r 
    from-pink-500 to-purple-500" onSubmit={(e) => submitData(e)}>
      <div>
        <input
          className="h-12 border border-blue-400 mt-2"
          placeholder="ชื่อ"
          id="name"
          required
        />
      </div>
      <div>
        <input
          className="h-12 border border-blue-400 mt-2"
          placeholder="tel"
          id="tel"
        />
      </div>
      <div>
        <input
          className="h-12 border border-blue-400 mt-2"
          placeholder="email"
          id="email"
        />
      </div>
      <button className="bg-pink-300 p-4">Submit</button>

      <button className="bg-purple-400 p-4" 
      type="reset"
      onClick={() => console.log("clear")  }
      >
      Clear

      </button>

      
    </form>
  );
};

export default Event7;