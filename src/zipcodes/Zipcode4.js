import thailandZipcodeData from "./thailand-zipcode.json";

const ZipCodeHome = ({ provinces }) => (
  <>
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl text-sky-300">Zipcode Search</h1>

      <input
        type="text"
        placeholder="Search Zipcode"
        className="border border-4 my-2 border-sky-500"
      />
    </div>
    <div className="bg-sky-300 rounded-lg w-2/3 mx-auto mt-2 p-3">
      <h2 className="text-left font-bold text-xl text-neutral-50">
        Select Province
      </h2>
      <div className="grid grid-cols-4 gap-2 text-center mt-2">
        {provinces.map((province) => (
          <div>
            <div className="text-neutral-50">{province}</div>
          </div>
        ))}
      </div>
    </div>
  </>
);

const ZipcodeProvince = () => {
  return (
    <>
      <h1>Bangkok Postcodes</h1>
      <div className="w-2/3 mx-auto bg-sky-500 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-center text-neutral-50">
              <th className="border border-6 border-red-300 p-2">#</th>
              <th className="border border-6 border-red-300  p-2 ">
                District
              </th>
              <th className="border border-5 border-red-300 p-2">
                Postcode
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-neutral-50">
              <td  className="border border-5 border-red-300 p-2 text-center" >1</td>
              <td  className="border border-5 border-red-300 p-2 text-center">เขตคลองสาน</td>
              <td  className="border border-5 border-red-300 p-2 text-center">10600</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const Zipcode4 = () => {
  const provinces = [...new Set(thailandZipcodeData.map((r) => r.province))]; //use ...new Set to only get unique provinces
  return (
    <div>
      {/* <ZipCodeHome provinces={provinces} /> */}
      <ZipcodeProvince />
    </div>
  );
};

export default Zipcode4;
