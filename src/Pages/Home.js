const Home = (props) => {
  return (
    <>
      <div className="text-center m-4 p-4">
        <p>This is HOME page</p>
        <p>{props.title}</p>
      </div>
    </>
  );
};

export default Home;
