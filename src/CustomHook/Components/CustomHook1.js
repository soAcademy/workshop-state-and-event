import { useTitle } from "./useCustomHook";

export const CustomHook1 = () => {
  const { title, setTitle } = useTitle('Bin');
  return (
    <div className="bg-red-200">
      <p>{title}</p>
      <p>
        <button
          className="m-2 rounded-lg bg-gray-300 p-2 font-bold shadow-sm duration-75 hover:shadow-md  active:bg-gray-500"
          onClick={() => (title === "Bin" ? setTitle("Jam") : setTitle("Bin"))}
        >
          Change Title
        </button>
      </p>
    </div>
  );
};
