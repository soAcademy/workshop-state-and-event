import React, { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useHistory } from "../hooks";

export const History = ({ setPage, page }) => {
  const [loadMore, setLoadMore] = useState(0);
  const {history} = useHistory({loadMore})

  return (
    <>
      <main className="flex flex-col items-center justify-center font-kanit">
        <p className="my-4 text-xl font-bold">ตรวจหวยย้อนหลัง</p>
        {history.slice(1).map((e) => {
          return (
            <article className="m-2 w-11/12 border ">
              <div className="flex w-full justify-between rounded-t bg-emerald-500 p-2 text-white">
                <div>
                  <p>ตรวจหวย</p>
                  <p>{e.title}</p>
                </div>
                <div
                  onClick={() => setPage(e.str)}
                  className="mr-1 flex cursor-pointer items-center"
                >
                  รางวัลอื่น &nbsp;
                  <BsArrowRightCircle className="hover:translate-x-1 duration-200"/>{" "}
                </div>
              </div>
              <div className="text-xl md:flex">
                <div className="m-2 rounded-lg bg-slate-100 p-2 text-center md:w-2/5 md:p-2">
                  <p className="text-slate-600">รางวัลที่ 1</p>
                  <p className="text text-4xl text-emerald-600">
                    {e.prizes[1]}
                  </p>
                </div>
                <div className="flex text-2xl font-semibold md:w-2/5 md:p-2">
                  <span className="w-1/2 text-center flex flex-col md:border-r">
                    <p className="mx-4 bg-slate-100 text-xl font-normal text-slate-600 rounded-md ">
                      เลขหน้า 3 ตัว
                    </p>
                    <div className="md:flex md:justify-evenly my-auto">
                      <p>{e.prizes[10][0]}</p>
                      <p>{e.prizes[10][1]}</p>
                    </div>
                  </span>
                  <span className="w-1/2 text-center flex flex-col md:border-r">
                    <p className="mx-4 bg-slate-100 text-xl font-normal text-slate-600 rounded-md ">
                      เลขท้าย 3 ตัว
                    </p>
                    <div className="md:flex md:justify-evenly my-auto">
                      <p>{e.prizes[6][0]}</p>
                      <p>{e.prizes[6][1]}</p>
                    </div>
                  </span>
                </div>
                <div className="flex w-full flex-col text-center md:w-1/5 md:p-2">
                  <p className="mx-4 bg-slate-100 text-xl font-normal text-slate-600 rounded-md ">
                    เลขท้าย 2 ตัว
                  </p>
                  <p className="my-auto font-semibold text-2xl">{e.prizes[7]}</p>
                </div>
              </div>
            </article>
          );
        })}
        <button
          className="mx-auto rounded-md bg-emerald-500 p-1 px-2"
          onClick={() => setLoadMore(loadMore + 1)}
        >
          โหลดเพิ่ม
        </button>
      </main>
    </>
  );
};
