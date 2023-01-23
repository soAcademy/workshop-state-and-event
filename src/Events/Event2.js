const helloWorld = () => {
  console.log("Hello 2");
};

const Event2 = () => <button onClick={() => helloWorld()}>Button 2</button>;

export default Event2;
