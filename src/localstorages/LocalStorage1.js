const LocalStorage1 = () => {
  localStorage.setItem("username", "Teak")
  const username = localStorage.getItem("username")
  return<>{username}</>
}
export default LocalStorage1;