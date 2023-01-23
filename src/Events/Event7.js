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
    <div className="bg-gray-300 w-fit m-4 p-4 border-2 border-black">
      <form className="flex flex-col" onSubmit={submit}>
        <label className="flex justify-between">
          Name: &nbsp;
          <input type="text" required placeholder="Name" />
        </label>
        <br />
        <label className="flex justify-between">
          Tel:&nbsp;
          <input type="tel" placeholder="Tel." pattern="[0-9]*" />
        </label>
        <br />
        <label className="flex justify-between">
          E-mail:&nbsp;
          <input type="email" placeholder="E-mail" />
        </label>
        <button className="border-2 border-black mt-4  bg-gray-400">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Event7;
