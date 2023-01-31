const ToDOList1 = () => {
  const addTask = (e) => {
    e.preventDefault();
  // เราจะใช้คู่กับงานที่เป็นแบบ input เพื่อป้องกันการ Refresh 
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    // console.log(e.target["task"].value); อันนี้มีไว้เชคข้อมูลเฉย ๆ ว่ามันขึ้นหรือไม่ขึ้นก่อนที่จะทำต่อไป 
    // ?? []; อันนี้จะใช้บ่อย เพื่อเชคข้อมูล external data ที่รับเข้ามาแล้วมันอาจจะมีการ undefined 

    const newTasks = [..._tasks, { task: e.target["task"].value }];
  // ... นี้เรียกว่า space operator ที่ถ้าเรามี array หรือ object สองอันขึ้นมามารวมกัน เราจะใช้ตัวนี้ใช้ให้มันรวมกัน
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border-2 border-blue-300 rounded py-2 mr-4"
        />
        <button type="submit" className="px-4 py-2 bg-red-300 rounded">
          เพิ่ม
        </button>
      </form>
    </>
  );
};
export default ToDOList1;
