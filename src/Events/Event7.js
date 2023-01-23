const Event7 = () => {
  const submit = (e) => {
    e.preventDefault();
    console.log({
      name: e.target[0].value,
      tel: e.target[1].value,
      email: e.target[2].value,
    });
  };
  return (
    <div className="bg-gray-300 w-fit m-4 p-4 border-2 border-black rounded-lg">
      <form className="flex flex-col" onSubmit={submit}>
        <label className="flex justify-between">
          Name: &nbsp;
          <input
            type="text"
            required
            placeholder="Name"
            className="px-1 focus:outline-none focus:border-red-500 border-2 rounded-lg"
          />
        </label>
        <br />
        <label className="flex justify-between">
          Tel:&nbsp;
          <input
            type="tel"
            placeholder="Tel."
            pattern="[0-9]*"
            className="px-1 focus:outline-none focus:border-red-500 border-2 rounded-lg"
          />
        </label>
        <br />
        <label className="flex justify-between">
          E-mail:&nbsp;
          <input
            type="email"
            placeholder="E-mail"
            className="px-1 focus:outline-none focus:border-red-500 border-2 rounded-lg"
          />
        </label>
        <div className="flex justify-between">
          <button className="border-2 border-black mt-4 bg-gray-200 hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-600 w-1/2 mx-1 rounded-lg">
            Submit
          </button>
          <button
            className="border-2 border-black mt-4 bg-gray-200 hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-600 w-1/2 mx-1 rounded-lg"
            type="reset"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
export default Event7;
