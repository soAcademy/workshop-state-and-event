const onInputSelect = () => {
  console.log("Hello 6");
};

const Event6 = () => (
  <input placeholder="Hello" onSelect={() => onInputSelect()} />
);

export default Event6;
