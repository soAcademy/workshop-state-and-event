const Event7 = (e) => {

  const submitForm = (e) => {
    
  e.preventDefault();

    const [name, tel, email] = e.target;
    // console.log(name.value);
    const data = {name: name.value, tel: tel.value, email:email.value};
    console.log(data);
  };

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <form className="flex flex-col border-2 rounded-lg shadow-md p-4" onSubmit={(e) => submitForm(e)}>
        <label className="p-2">Name: </label>
        <input
          type="text" name="inName"
          className="border-2 border-gray-300 rounded-md bg-gray-50 mb-2 p-2"
          required
        />
        <label className="p-2">Tel: </label>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md bg-gray-50 mb-2 p-2"
        />
        <label className="p-2">Email: </label>
        <input
          type="email"
          className="border-2 border-gray-300 rounded-md bg-gray-50 mb-2 p-2"
        />
        <button type="submit" className="rounded-lg bg-blue-500 text-white mt-4 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Event7;
