const onInputChange = (e) => {
  console.log(e.target.value);
};

const Event4 = () => <input onChange={(e) => onInputChange(e)} />;

export default Event4;
