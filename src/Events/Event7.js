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
    <div className="bg-gray-300 w-fit my-4 border-2 border-black p-2">
      <form onSubmit={submit}>
        <label className="flex justify-between">
          Name:
          <input type="text" required placeholder="name"></input>
        </label>
        <br />
        <label className="flex justify-between">
          Tel: &nbsp;
          <input type="tel" required placeholder="tel"></input>
        </label>
        <br />
        <label className="flex justify-between">
          E-mail: &nbsp;
          <input type="email" placeholder="Email"></input>
        </label>
        <br />
        <div className="w-full flex justify-center p-2">
          <button
            type="submit"
            className="border-2 bg-gray-400 px-2 rounded-md w-full"
          >
            Submit &nbsp;
          </button>
        </div>
      </form>
    </div>
  );
};

export default Event7;
