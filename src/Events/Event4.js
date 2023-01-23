const Event4 = () => {
  const inputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="m-2">
      <label>INPUT: </label>
      <input type="text" className="border-2 bg-gray-100 p-1" onChange={e => inputChange(e)}/>
    </div>
  );
};

export default Event4;
