import mockZipcode from './mockZipCode'
const DashboardZipcode = () => {
const uniqueProvince = [...new Set(mockZipcode.map(e=>e.province))]
  return (
    <div className='flex flex-col justify-center m-10 font-kanit'>
      <p className='mx-auto p-10 text-2xl font-bold'>ค้นหารหัสไปรษณีย์</p>
      <input placeholder='ค้นหา ตำบล อำเภอ' className='border-2 px-8 py-2'></input>
      <div className='mt-10'>
        <p>เลือกจังหวัด</p>
        <div className='grid grid-cols-4'>
        {uniqueProvince.map(e=><div className='text-blue-400'>{e}</div>)}
        </div>
      </div>
    </div>
  )
}

export default DashboardZipcode;