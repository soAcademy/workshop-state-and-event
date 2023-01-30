const LocalStorage3 = () => {
  const objectData = {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  }
  localStorage.setItem("objectData",JSON.stringify(objectData))
  const object = localStorage.getItem("objectData")
  return <div>{object}</div>
}
export default LocalStorage3