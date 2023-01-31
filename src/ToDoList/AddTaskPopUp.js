const AddTaskPopUp = ({ isAddPopUp, setIsAddPopUp, addTask }) => {
  return (
    <div
      className={`w-[450x] h-[500px] bg-white shadow-xl border-2 border-gray-400 fixed inset-1/4 box-border flex flex-col 
    justify-between rounded-lg overflow-hidden duration-300 ${
      isAddPopUp ? "scale-1" : "scale-0"
    }`}
    >
      <div className="p-6 text-lg flex justify-between">
        เพิ่มโน๊ต
        <button
          onClick={() => {
            setIsAddPopUp(false);
          }}
          className="text-red-500"
        >
          ปิด
        </button>
      </div>
      <form 
      id="addNote"
      onSubmit={(e)=>{
          addTask(e)
          e.target[0].value = ''
          // setIsRemovePopUp(false)
        }
      } 
      className="h-full w-full flex flex-col justify-between">
        <textarea
          id="textarea"
          className="m-6 p-4 border-2 rounded-md min-h-[150px]"
          placeholder="Enter Task..."
          required
        ></textarea>
        <button
          type="submit"
          className="bg-sky-400 m-6 mb-8 h-16 rounded-lg hover:bg-sky-500 
      active:bg-sky-600"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
};

export default AddTaskPopUp;
