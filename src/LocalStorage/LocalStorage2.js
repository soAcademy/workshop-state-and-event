const LocalStorage2 = () => {
  localStorage.setItem("num", 14)

  const num = localStorage.getItem("num")

  return <>&nbsp;&nbsp;{Number(num)+3}</>
}

export default LocalStorage2