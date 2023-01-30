const LocalStorage1 =()=>{
  localStorage.setItem("nickname","Dew");

  const nickname = localStorage.getItem("nickname");

  return(
    <>
    {nickname}
    </>
  );
};
export default LocalStorage1;