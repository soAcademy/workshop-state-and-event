const LocalStorage2 = () => {
  localStorage.setItem("num", 19);

  const num = localStorage.getItem("num");

  return <>&nbsp;&nbsp;{Number(num) + 3}</>;
};
// return <>{(num) + 3}</>; ถ้าไม่มี {number}กำกับ 
// ค่าจะเอามาชนต่อกันแทนที่จะเป็นบวก (19+3=22) แต่จะกลายเป็น 193 
export default LocalStorage2;

