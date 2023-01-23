const Event6 = () => {
  const helloWorld = () => (console.log('Hello 6'))
  return (
    <input type="text" className="w-14 border-2" placeholder="Hello" onSelect={helloWorld}></input>
  )
}

export default Event6