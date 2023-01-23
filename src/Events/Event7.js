const Event7 = () => {
  return (
    <div className="bg-gray-300 w-fit my-4 border-2 border-black p-2">
      <form>
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
            className="border-2 bg-gray-400 px-2 rounded-md w-full "
          >
            Submit &nbsp;
          </button>
        </div>
      </form>
    </div>
  );
};

export default Event7;
