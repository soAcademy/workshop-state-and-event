const LocalStorage2 =()=>{
  localStorage.setItem("num",17);

const num = localStorage.getItem("num");

  return<>{Number(num)+5}</>
};
export default LocalStorage2;