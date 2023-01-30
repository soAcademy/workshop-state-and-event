const LocalStorage1 =()=>{
  localStorage.setItem("username","Dew");

  const username = localStorage.getItem("username");

  return(
    <>
    {username}
    </>
  );
};
export default LocalStorage1;