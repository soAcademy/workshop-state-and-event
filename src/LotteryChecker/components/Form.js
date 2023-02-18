import { AiOutlineReload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export const Form = ({ setCheckClicked, setQueryNumbers, checkClicked }) => {
  return (
    <div className="bg-gradi ent-to-b w-1/3 rounded-md from-slate-200 to-slate-50 p-5">
      <p className="text-lg">กรอกเลข </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCheckClicked(!checkClicked);
          const _queryNumbers = [
            ...new Set(e.target[0].value.split("\n").filter((i) => i !== "")),
          ];
          setQueryNumbers(_queryNumbers);
        }}
      >
        <textarea
          placeholder="กรอกตัวเลขที่ต้องการตรวจ เช่น 11, 222, 333333"
          cols={6}
          rows={5}
          className="my-2 max-h-[200px] min-h-[200px] w-full px-3 py-1"
        ></textarea>
        <div className="m-4 flex space-x-4 font-bold">
          <button
            type="submit"
            className="flex h-10 w-1/2 items-center justify-center rounded-md 
            bg-yellow-300 shadow-lg shadow-slate-300
            duration-300 hover:bg-yellow-400 active:bg-amber-300"
          >
            <BsSearch className="text-xl" />
            &nbsp; ตรวจหวย
          </button>
          <button
            type="reset"
            className="flex h-10 w-1/2 items-center justify-center rounded-md 
            bg-gray-400 shadow-lg shadow-slate-300
            duration-300 hover:bg-gray-500 active:bg-slate-400"
          >
            <AiOutlineReload className="text-xl" />
            &nbsp; เคลียร์เลข
          </button>
        </div>
      </form>
    </div>
  );
};
