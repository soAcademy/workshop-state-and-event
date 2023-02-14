// import React, { useState, useEffect } from "react";

// const CustomHook3 = () => {
//   const [num, setNum] = useState(0);
//   const [numSquare, setNumSquare] = useState(0);

//   useEffect(() => {
//     setNumSquare(Number(num) ** 2);
//   }, [num]);

//   return (
//     <>
//       <p>Num: {num}</p>
//       <p>Num Square: {numSquare}</p>
//       <input
//         className="border border-black bg-yellow-200 w-64"
//         onChange={(e) => setNum(e.target.value)}
//       />
//     </>
//   );
// };

// export default CustomHook3;

import React, { useState, useEffect } from "react";

const useNum = () => {
  const [num, setNum] = useState(0);
  return {
    num,
    setNum,
  };
};

const useNumSquare = ({ num }) => {
  const [numSquare, setNumSquare] = useState(0);

  useEffect(() => {
    setNumSquare(Number(num) ** 2);
  }, [num]);
  return { numSquare, setNumSquare };
};

<<<<<<< HEAD
const CustomHook3 = () => {
=======
export const CustomHook3 = () => {
>>>>>>> ec4791d4bc61803196a32f5fe037e6c7f71fd71b
  const { num, setNum } = useNum();
  const { numSquare } = useNumSquare({ num });

  return (
    <>
      <p>Num: {num}</p>
      <p>Num Square: {numSquare}</p>
      <input
        className="border border-black bg-yellow-200 w-64"
        onChange={(e) => setNum(e.target.value)}
      />
    </>
  );
};

<<<<<<< HEAD
export default CustomHook3;
=======
// export default CustomHook3;
>>>>>>> ec4791d4bc61803196a32f5fe037e6c7f71fd71b
