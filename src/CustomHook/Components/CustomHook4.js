import { useFetch } from "./useCustomHook";
import { useData } from "./useCustomHook";

export const CustomHook4 = () => {
  const {data, setData} = useData();
  const {isFetch, setIsFetch} = useFetch({
    method: "get",
    url: "https://api.sampleapis.com/coffee/hot",
    setData: setData,
  });
  return (
    <>
      <p>
        <button
          className="w-24 bg-red-300 p-4"
          onClick={() => setIsFetch(!isFetch)}
        >
          Fetch
        </button>
      </p>
      <p>{isFetch && JSON.stringify(data)}</p>
    </>
  );
};
