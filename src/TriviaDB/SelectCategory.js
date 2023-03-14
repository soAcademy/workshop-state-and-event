import React from "react";

const SelectCategory = ({
  categories,
  setCurrentCategory,
  setUser
}) => {

  return (
    <>
      <div className="m-32 h-1/2 bg-yellow-200 p-16 rounded-xl">
        <div className="text-center">กรุณากรอกชื่อผู้เล่น</div>
        <div className="text-center">
          <input type="text" onChange={(e)=>setUser(e.target.value)} />
        </div>
        <div className="py-4 text-center">กรุณาเลือกหมวดหมู่</div>
        <div className="mx-16 grid gap-2 grid-cols-1">
          {categories.map((r) => (
            <button
              key={r.id}
              className="bg-green-400 py-4"
              onClick={() => setCurrentCategory(r.name)}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectCategory;
