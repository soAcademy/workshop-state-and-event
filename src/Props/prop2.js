const Prop2 = ({data1, data2})=><>{data1},{data2}</>   // แบบ destructuring   
// const Prop2 = (props) => <>{props.data1}, {props.data2}</>  แบบไม่ destructuring
export default Prop2;

// prop1 = {
//   data1: "Data1",
//   data2: "Data2"
// }