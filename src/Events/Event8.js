const Event8 = (e) => {
  const selectFile = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <form className=" w-1/2 flex flex-col border-2 rounded-lg shadow-md p-4">
        <label className="block">
          <input
            type="file"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            onChange={(e) => selectFile(e)}
            accept="image/png, image/jpeg"
          />
        </label>
      </form>
    </div>
  );
};

export default Event8;
