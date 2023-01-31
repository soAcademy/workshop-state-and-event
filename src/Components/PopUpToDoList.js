// import React from "react";

// const PopUpToDoList = () => {
//   const bgPallets = ["#f6f7d8", "#fcdd8d", "#fd8d41"];
//   return (
//     <>
//       <form onSubmit={(e) => addTask(e)}>
//         <input
//           type="text"
//           id="task"
//           className="border-2 border-sky-400 rounded py-2 mr-4"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-green-500 rounded text-white"
//         >
//           เพิ่ม
//         </button>
//       </form>
//       <div>
//         {tasks?.map((r, idx) => (
//           <div className="bg-sky-500 mt-2 text-white p-3">
//             <h1>To do list : {r.task}</h1>
//             <div>สถานะ : {r.status}</div>
//             <div>วันที่ : {new Date(r.datetime).toLocaleString("TH")}</div>
//             <div className="my-3">
//               <button
//                 className="bg-green-500 text-white px-4 rounded-[10px]"
//                 onClick={() => doneTask(r.id)}
//               >
//                 done
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 rounded-[10px] ml-3"
//                 onClick={() => deleteTask(r.id)}
//               >
//                 delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default PopUpToDoList;
