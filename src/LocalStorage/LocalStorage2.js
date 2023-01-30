const LocalStorage2 =()=>{
  localStorage.setItem("num",15);

const num = localStorage.getItem("num");
  return<>{Number(num)+5}</>
};
export default LocalStorage2;