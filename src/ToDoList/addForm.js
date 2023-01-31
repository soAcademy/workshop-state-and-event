const addForm = (props) => {
  return (
    <>
      <form>
        <input
          type="text"
          id="task"
          className="border-2 border-black rounded py-2 m-4"
        />
        <button type="submit" className="px-4 py-2 rounded text-6xl">
          บันทึก
        </button>
      </form>
    </>
  );
};

export default addForm;
