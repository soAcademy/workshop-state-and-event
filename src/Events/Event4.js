const Event4 = () => (
  <div className="bg-grey-400">
    <input
      className="border-2 w-14"
      type="text"
      placeholder="Event4"
      onChange={(e) => console.log(e.target.value)}
    ></input>
  </div>
);

export default Event4;
