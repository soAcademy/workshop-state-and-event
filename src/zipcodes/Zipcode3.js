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

const Zipcode3 = () => {
  const provinces = [...new Set(thailandZipcodeData.map((r) => r.province))]; //use ...new Set to only get unique provinces
  return (
    <div>
      <ZipCodeHome provinces={provinces} />
    </div>
  );
};

export default Zipcode3;
