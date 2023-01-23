const Event8 = () => {
  return (
    <label>Event8 - // Image Upload Button // : &nbsp;
    <input type="file" accept="image/*" onChange={(e)=> console.log(e.target.files[0].name)}></input>
    </label>
  )
}

export default Event8