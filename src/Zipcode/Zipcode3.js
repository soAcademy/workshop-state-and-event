import ThailandZipcodeData from "./thailand-zipcode.json"

const ZipCodeHome = ({provinceList}) => (
  <>
<h1 className="text-black text-center text-4xl">ค้นหารหัสไปรษณีย์</h1>
<div>
  <input
    type="text"
    className="border-2 border-gray-400 rounded-lg p-2 mt-4 w1/3"
    placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
  />
</div>
<div className="w-2/3 mx-auto bg-yellow-600 p-4 mt-8 rounded-lg text-left">
  <h2 className="texl-xl font-bold mt-4">เลือกจังหวัด</h2>
  <div className="grid grid-cols-4 mt-4">
    {provinceList.map((p) => (
      <div>{p}</div>
    ))}
  </div>
</div>
</>
)

const Zipcode3 = () => {
  const provinceList = [...new Set(ThailandZipcodeData.map((p) => p.province))]

  return (
    <div className="w-full text-center">
      <ZipCodeHome provinceList={provinceList}/>
    </div>

  )
}

export default Zipcode3