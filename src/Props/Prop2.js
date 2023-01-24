// const Prop2 = ({data1, data2}) => <div className="text-xl font-semibold text-center m-3">{data1}, {data2}</div>
const Prop2 = (props) => (
  <div className="text-xl font-semibold text-center m-3">
    {props.data1}, {props.data2}
  </div>
);

export default Prop2;
