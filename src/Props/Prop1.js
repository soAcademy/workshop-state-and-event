// const Prop1 = (props) => <div className="text-xl font-semibold text-center m-3">{props.data}</div>
const Prop1 = ({ data }) => (
  <div className="text-xl font-semibold text-center m-3">{data}</div>
);

export default Prop1;
