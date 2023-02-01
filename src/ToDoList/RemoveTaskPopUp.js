const RemoveTaskPopUp = ({ isRemovePopUp, setIsRemovePopUp, updateTasks, tasks, deleteId }) => {
  return (
    <div
      className={`w-60 h-36 bg-white shadow-xl border-2 border-gray-400 box-border flex flex-col 
    justify-evenly rounded-lg overflow-hidden duration-300 ${
      isRemovePopUp ? "scale-1" : "scale-0"
    }`}
    >
      <div className="self-center py-4 text-xl">ลบรายการ</div>
      <div className="flex justify-between mx-8 mb-8">
        <button
          onClick={() => {
            const _newTasks = [...tasks.filter((r) => r.id !== deleteId)];
            updateTasks(_newTasks);
            setIsRemovePopUp(false)
          }}
          className="bg-blue-400 hover:bg-blue-500 eactive:bg-blue-600 rounded-lg px-4 py-2"
        >
          ยืนยัน
        </button>
        <button
          onClick={() => {
            setIsRemovePopUp(false);
          }}
          className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 rounded-lg px-4 py-2"
        >
          ยกเลิก
        </button>
      </div>
    </div>
  );
};

export default RemoveTaskPopUp;

// const _newTasks = [
//   ...tasks.filter((r) => r.id !== task.id),
// ];
// updateTask(_newTasks);
