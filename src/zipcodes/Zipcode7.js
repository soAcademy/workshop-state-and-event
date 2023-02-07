import { useState, useEffect } from "react";
import thailandZipcodeData from "./thailand-zipcode.json";

const ZipCodeHome = ({ provinces, setProvince }) => (
  <>
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl text-sky-500">Zipcode Search</h1>

      <input
        type="text"
        placeholder="Search Zipcode"
        className="border border-4 my-2 border-sky-500"
      />
    </div>
    <div className="bg-sky-500 rounded-lg w-2/3 mx-auto mt-2 p-3">
      <h2 className="text-left font-bold text-xl text-neutral-50">
        Select Province
      </h2>
      <div className="grid grid-cols-4 gap-2 text-center mt-2">
        {provinces.map((province) => (
          <div>
            <div
              className="text-neutral-50 cursor-pointer hover:text-sky-800"
              onClick={() => setProvince(province)}
            >
              {province}
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

const ZipcodeProvince = (props) => {
  const { province, districts2 } = props;
  return (
    <>
      <h1 className="font-bold p-2 text-sky-400 text-xl">Postcodes: {province}</h1>
      <div className="w-2/3 mx-auto bg-sky-500 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-center text-neutral-50">
              <th className="border border-6 border-red-300 p-2">#</th>
              <th className="border border-6 border-red-300  p-2 ">District</th>
              <th className="border border-5 border-red-300 p-2">Postcode</th>
            </tr>
          </thead>
          <tbody>
            {districts2.map((r, idx) => (
              <tr className="text-neutral-50" key={idx}>
                <td className="border border-5 border-red-300 p-2 text-center">
                  {idx + 1}
                </td>
                <td className="border border-5 border-red-300 p-2 text-center">
                  {r.district}
                </td>
                <td className="border border-5 border-red-300 p-2 text-center">
                  {r.zipcode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const Zipcode7 = () => {
  const [province, setProvince] = useState();
  const [districts2, setDistrict] = useState([]);
  // const province = "กรุงเทพมหานคร";
  const provinces = [...new Set(thailandZipcodeData.map((r) => r.province))]; //use ...new Set to only get unique provinces // [...new Set([1, 1, 2, 2, 3, 3])]

  useEffect(() => {
  const districts = thailandZipcodeData.filter((r) => r.province === province);
  console.log("filterProvince", districts);
  const districts1 = districts.map((r) => [r.district, r]); //['เขตพระนคร', {…}]
  console.log("filterDistrict", districts1);
  
  const districts2 = [...new Map(districts1).values()]; // [...new Map([["key1", "value1"], ["key2", "value2"]]).values()]  //only map unique  districts (get only one location code from each district)
  console.log("districtMapped", districts2);
  setDistrict(districts2);
}, [province])
// const [districts2, setDistrict] = useState([]);
// useEffect(() => {
  // const districts2 = [
  //   ...new Map(
  //     thailandZipcodeData.filter((r) => r.province === province).map((r) => [
  //       r.district,
  //       r,
  //     ])
  //   ).values(),
  // ];
  // setDistrict(districts2);
  // }, [province])
  return (
    <div>
      {province === undefined && (
        <ZipCodeHome provinces={provinces} setProvince={setProvince} />
      )}
      {province !== undefined && (
        <ZipcodeProvince province={province} districts2={districts2} />
      )}
    </div>
  );
};

export default Zipcode7;
