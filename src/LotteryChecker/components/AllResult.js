import { BsSearch } from "react-icons/bs";
export const AllResult = ({ lotteryDateTitle, prizes, setPage, page }) => {
  return (
    <div className="relative my-2 w-10/12">
      <p className="text-center text-2xl">
        ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ {lotteryDateTitle}
      </p>
      <button
        onClick={(e) => {
          page === 1 ? setPage(0) : setPage(1);
        }}
        className="absolute top-10 right-0 flex items-center rounded-lg bg-gradient-to-t from-slate-300 
              via-slate-300 bg-size-200 bg-pos-0 p-2 text-sm shadow-lg transition-all
          duration-300 hover:bg-pos-100 "
      >
        <BsSearch /> ตรวจหวยย้อนหลัง
      </button>
      <div className="my-2 w-full text-center shadow-md">
        <p className="w-1/2 rounded-t-lg bg-emerald-500 p-2 text-xl font-bold">
          รางวัลที่ 1 รางวัลละ {prizes[0].info[1].toLocaleString()} บาท
        </p>
        <p className="w-full bg-gradient-to-t from-slate-200 p-4 text-7xl">
          {String(prizes[0].data).split("").join(" ")}
        </p>
      </div>
      <div className="">
        <div className="flex h-fit w-full space-x-2 text-center text-sm ">
          <div className="w-2/5 shadow-md">
            <div className="rounded-t-lg bg-emerald-500 p-2 font-bold">
              <p>เลขหน้า 3 ตัว</p>
              <p>
                {prizes[7].info[0]} รางวัลๆละ{" "}
                {prizes[7].info[1].toLocaleString()} บาท
              </p>
            </div>
            <div className="flex justify-evenly border p-2 text-4xl ">
              {prizes[7].data.map((e, idx) => {
                return <p key={idx}>{e}</p>;
              })}
            </div>
          </div>
          <div className="w-2/5 shadow-md">
            <div className="rounded-t-lg bg-emerald-500 p-2 font-bold">
              <p>เลขท้าย 3 ตัว</p>
              <p>
                {prizes[5].info[0]} รางวัลๆละ{" "}
                {prizes[5].info[1].toLocaleString()} บาท
              </p>
            </div>
            <div className="flex justify-evenly border p-2 text-4xl">
              {prizes[5].data.map((e, idx) => {
                return <p key={idx}>{e}</p>;
              })}
            </div>
          </div>
          <div className="w-1/5 shadow-md">
            <div className="rounded-t-lg bg-emerald-500 p-2 font-bold">
              <p>เลขท้าย 2 ตัว</p>
              <p>
                {prizes[6].info[0]} รางวัลๆละ{" "}
                {prizes[6].info[1].toLocaleString()} บาท
              </p>
            </div>
            <p className="border p-2 text-4xl">{prizes[6].data}</p>
          </div>
        </div>
      </div>
      <div className="my-2 w-full text-center shadow-md">
        <div className="flex justify-between rounded-t-lg bg-emerald-500 p-2 font-bold">
          <p>รางวัลข้างเคียงรางวัลที่ 1</p>{" "}
          <p>
            {prizes[8].info[0]} รางวัลๆละ {prizes[8].info[1].toLocaleString()}{" "}
            บาท
          </p>
        </div>
        <div className="flex w-full justify-center bg-gradient-to-t from-slate-200">
          {prizes[8].data.map((e, idx) => {
            return (
              <p key={idx} className="p-4 text-4xl">
                {e.split("").join(" ")}
              </p>
            );
          })}
        </div>
      </div>
      <table className="mt-4 w-full table-fixed border-collapse text-center">
        <thead className="">
          <tr>
            <th colSpan={5} className="rounded-t-lg bg-emerald-500">
              <div className="flex justify-between p-2">
                <p>รางวัลที่ 2</p>
                <p>
                  {prizes[1].info[0]} รางวัลๆละ{" "}
                  {prizes[1].info[1].toLocaleString()} บาท
                </p>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <div className="w-full shadow-md">
        <div className="grid grid-cols-5">
          {prizes[1].data.map((e, idx) => {
            return (
              <p
                key={idx}
                className="flex h-10 items-center justify-center border"
              >
                {e}
              </p>
            );
          })}
        </div>
      </div>
      <table className="mt-4 w-full table-fixed border-collapse text-center">
        <thead className="">
          <tr>
            <th colSpan={5} className="rounded-t-lg bg-emerald-500">
              <div className="flex justify-between p-2">
                <p>รางวัลที่ 3</p>
                <p>
                  {prizes[2].info[0]} รางวัลๆละ{" "}
                  {prizes[2].info[1].toLocaleString()} บาท
                </p>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <div className="w-full shadow-md">
        <div className="grid grid-cols-5">
          {prizes[2].data.map((e, idx) => {
            return (
              <p
                key={idx}
                className="flex h-10 items-center justify-center border"
              >
                {e}
              </p>
            );
          })}
        </div>
      </div>
      <table className="mt-4 w-full table-fixed border-collapse text-center">
        <thead className="">
          <tr>
            <th colSpan={5} className="rounded-t-lg bg-emerald-500">
              <div className="flex justify-between p-2">
                <p>รางวัลที่ 4</p>
                <p>
                  {prizes[3].info[0]} รางวัลๆละ{" "}
                  {prizes[3].info[1].toLocaleString()} บาท
                </p>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <div className="w-full text-center shadow-md">
        <div className="grid grid-cols-5">
          {prizes[3].data.map((e, idx) => {
            return (
              <p
                key={idx}
                className="flex h-10 items-center justify-center border"
              >
                {e}
              </p>
            );
          })}
        </div>
      </div>
      <table className="mt-4 w-full table-fixed border-collapse text-center">
        <thead className="">
          <tr>
            <th colSpan={5} className="rounded-t-lg bg-emerald-500">
              <div className="flex justify-between p-2">
                <p>รางวัลที่ 5</p>
                <p>
                  {prizes[4].info[0]} รางวัลๆละ{" "}
                  {prizes[4].info[1].toLocaleString()} บาท
                </p>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <div className="w-full text-center shadow-md">
        <div className="grid grid-cols-5">
          {prizes[4].data.map((e, idx) => {
            return (
              <p
                key={idx}
                className="flex h-10 items-center justify-center border"
              >
                {e}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
