const onMouseOverButton = (e) => {
  console.log("Hello 5");
};

const Event5 = () => (
  <button onMouseOver={(e) => onMouseOverButton(e)}>Hover on Me</button>
);

export default Event5;
