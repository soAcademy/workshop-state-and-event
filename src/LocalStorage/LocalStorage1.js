const LocalStorage1 = () => {
 localStorage.setItem("username", "Na")

  const username = localStorage.getItem("username")

  return <>{username}</>
}

export default LocalStorage1