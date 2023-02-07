const Zipcode1 = () => {
  const provinces = ["กรุงเทพมหานคร", "นนทบุรี", "สุโขทัย", "แพร่"];
  return (
    <div>
    <div className="text-center">
      <h1 className="font-bold my-2 text-xl text-sky-300">Zipcode Search</h1>
      
        <input type="text" placeholder="Search Zipcode" className="border border-4 my-2 border-sky-500"/>
      
    </div>
    <div className="bg-sky-300 rounded-lg w-2/3 mx-auto mt-2 p-3">
      <h2 className="text-left">Select Province</h2>
      <div className="grid grid-cols-4 gap-2 text-center mt-2">
      {provinces.map((province) => (
          <div>
            <div>{province}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Zipcode1;
