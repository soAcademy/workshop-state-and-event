import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineReload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const AppLotteryChecker = () => {
  const [queryNumbers, setQueryNumbers] = useState([]);
  const [checkClicked, setCheckClicked] = useState(false);
  const [prizes, setPrizes] = useState([]);
  const [lotteryDateTitle, setLotteryDateTitle] = useState("");
  const [result, setResult] = useState([]);
  const [sumResult, setSumResult] = useState();

  const sum = (arr) => {
    return arr?.reduce((acc, e) => acc + e, 0);
  };
  const genResultText = (result) => {
    console.log("result", result);

    const textWonFirstThree = result?.reduce((acc, e) => {
      return e.wonFirstThree !== -1
        ? [
            ...acc,
            {
              number: e.number,
              text: "ถูกรางวัลเลขหน้า 3 ตัว",
              prize: prizes[7]?.info[1],
            },
          ]
        : [...acc];
    }, []);
    const textWonLastThree = result?.reduce((acc, e) => {
      return e.wonLastThree !== -1
        ? [
            ...acc,
            {
              number: e.number,
              text: "ถูกรางวัลเลขท้าย 3 ตัว",
              prize: prizes[5]?.info[1],
            },
          ]
        : [...acc];
    }, []);

    const textWonLastTwo = result?.reduce((acc, e) => {
      return e.wonLastTwo !== -1
        ? [
            ...acc,
            {
              number: e.number,
              text: "ถูกรางวัลเลขท้าย 2 ตัว",
              prize: prizes[6]?.info[1],
            },
          ]
        : [...acc];
    }, []);
    const textWonPrizes = result?.reduce((acc, e) => {
      return e.wonIndex !== -1
        ? [
            ...acc,
            {
              number: e.number,
              text: `${
                e.wonIndex === 8
                  ? "ถูกรางวัลข้างเคียงรางวัลที่ 1"
                  : "ถูกรางวัลที่"
              } ${
                e.wonIndex === 0
                  ? "1"
                  : e.wonIndex === 1
                  ? "2"
                  : e.wonIndex === 2
                  ? "3"
                  : e.wonIndex === 3
                  ? "4"
                  : "5"
              }`,
              prize:
                e.wonIndex === 8
                  ? 100000
                  : e.wonIndex === 0
                  ? 6000000
                  : e.wonIndex === 1
                  ? 200000
                  : e.wonIndex === 2
                  ? 80000
                  : e.wonIndex === 3
                  ? 40000
                  : 20000,
            },
          ]
        : [...acc];
    }, []);
    const resultText = [
      ...textWonPrizes,
      ...textWonFirstThree,
      ...textWonLastThree,
      ...textWonLastTwo,
    ];
    return resultText;
  };
  const checkResult = (queryNumbers) => {
    const _prizes = [
      { info: [1, 60000], data: ["297411", "297492"] },
      ...prizes?.slice(1),
    ];
    const _result = queryNumbers?.map((e) => {
      const wonFirstThree = prizes[7]?.data.findIndex((i) =>
        i.includes(e.slice(0, 3))
      );
      const wonLastThree = prizes[5]?.data.findIndex((i) =>
        i.includes(e.slice(3, 6))
      );
      const wonLastTwo = prizes[6]?.data.findIndex((i) =>
        i.includes(e.slice(4, 6))
      );
      const wonIndex = _prizes?.findIndex((i) => i.data.includes(e));
      return {
        number: e,
        wonFirstThree: wonFirstThree,
        wonLastThree: wonLastThree,
        wonLastTwo: wonLastTwo,
        wonIndex: wonIndex,
      };
    });
    return genResultText(_result);
  };

  useEffect(() => {
    const queryDate = new Date().toISOString().split("T")[0];
    const config = {
      method: "get",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${queryDate}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        const _prizes = Object.values(response.data.data.prizes);
        setPrizes(_prizes);
        setLotteryDateTitle(response.data.data.lotteryDateTitle);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const _result = checkResult(queryNumbers);
    const sumResult = sum(_result?.map((e) => e.prize));
    console.log("_result", _result);
    setSumResult(sumResult);
    setResult(_result);
  }, [checkClicked]);
  return (
    <>
      {prizes.length > 1 && (
        <div className="flex flex-col items-center justify-center font-kanit">
          <img className="mt-7 h-28" src="./lotteryLogo.png" alt="" />
          <p className="my-4 text-xl font-bold">
            ตรวจผลลอตเตอรี่ By กองสลากไมนัส
          </p>
          <div className="w-1/3 rounded-md bg-gradient-to-b from-slate-200 to-slate-50 p-5">
            <p className="text-lg">กรอกเลข</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setCheckClicked(!checkClicked);
                const _queryNumbers = [
                  ...new Set(
                    e.target[0].value.split("\n").filter((i) => i !== "")
                  ),
                ];
                setQueryNumbers(_queryNumbers);
              }}
            >
              <textarea
                placeholder="กรอกตัวเลข"
                cols={6}
                rows={5}
                className="my-2 max-h-[200px] min-h-[200px] w-full px-3 py-1"
              ></textarea>
              <div className="m-4 flex space-x-4 font-bold">
                <button
                  type="submit"
                  className="flex h-10 w-1/2 items-center justify-center rounded-md
            bg-yellow-300 hover:bg-yellow-400 active:bg-amber-300"
                >
                  <BsSearch className="text-xl" />
                  &nbsp; ตรวจหวย
                </button>
                <button
                  type="reset"
                  className="flex h-10 w-1/2 items-center justify-center rounded-md 
            bg-gray-400 hover:bg-gray-500 active:bg-slate-400"
                >
                  <AiOutlineReload className="text-xl" />
                  &nbsp; เคลียร์เลข
                </button>
              </div>
            </form>
          </div>
          <div className=" my-4 w-3/4 rounded-md bg-gradient-to-t from-slate-100 px-8 py-4">
            {queryNumbers?.map((number, idx) => {
              return result?.findIndex((result) => result.number === number) !==
                -1 ? (
                result
                  ?.filter((e) => e.number === number)
                  .map((data, jdx) => {
                    return (
                      <div
                        key={jdx}
                        className="mx-auto flex w-1/2 justify-between "
                      >
                        <p className="w-1/4">{data.number}</p>
                        <p className="w-3/4">{data.text}</p>
                      </div>
                    );
                  })
              ) : (
                <div key={idx} className="mx-auto flex w-1/2 justify-between">
                  <p className="w-1/4">{number}</p>
                  <p className="w-3/4">เสียใจด้วย คุณถูกกิน 55555</p>
                </div>
              );
            })}

            {sumResult !== 0 && (
              <p className="my-2 text-center text-xl ">
                คุณถูกหวยงวดนี้ทั้งสิ้น {sumResult.toLocaleString("TH")} บาท
              </p>
            )}
          </div>
          <div className="relative my-2 w-10/12">
            <p className="text-center">
              ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ {lotteryDateTitle}
            </p>
            <button
              className="absolute top-0 right-0 flex items-center rounded-lg 
          border-[1px] border-slate-100 bg-gradient-to-t from-slate-300
          p-2 text-sm hover:from-slate-400"
            >
              <BsSearch /> ตรวจหวยย้อนหลัง
            </button>
            <div className="my-2 w-full text-center">
              <p className="w-1/2 rounded-t-lg bg-emerald-500 p-2 text-xl font-bold">
                รางวัลที่ 1 รางวัลละ {prizes[0].info[1].toLocaleString()} บาท
              </p>
              <p className="w-full bg-gradient-to-t from-slate-200 p-4 text-7xl">
                {String(prizes[0].data).split("").join(" ")}
              </p>
            </div>
            <div className="">
              <div className="flex h-fit w-full space-x-2 text-center text-sm">
                <div className="w-2/5">
                  <div className="rounded-t-lg bg-emerald-500 p-2 font-bold">
                    <p>เลขหน้า 3 ตัว</p>
                    <p>
                      {prizes[7].info[0]} รางวัลๆละ{" "}
                      {prizes[7].info[1].toLocaleString()} บาท
                    </p>
                  </div>
                  <div className="flex justify-evenly border p-2 text-4xl ">
                    {prizes[7].data.map((e) => {
                      return <p>{e}</p>;
                    })}
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="rounded-t-lg bg-emerald-500 p-2 font-bold">
                    <p>เลขท้าย 3 ตัว</p>
                    <p>
                      {prizes[5].info[0]} รางวัลๆละ{" "}
                      {prizes[5].info[1].toLocaleString()} บาท
                    </p>
                  </div>
                  <div className="flex justify-evenly border p-2 text-4xl">
                    {prizes[5].data.map((e) => {
                      return <p>{e}</p>;
                    })}
                  </div>
                </div>
                <div className="w-1/5">
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
            <div className="my-2 w-full text-center ">
              <div className="flex justify-between rounded-t-lg bg-emerald-500 p-2 font-bold">
                <p>รางวัลข้างเคียงรางวัลที่ 1</p>{" "}
                <p>
                  {prizes[8].info[0]} รางวัลๆละ{" "}
                  {prizes[8].info[1].toLocaleString()} บาท
                </p>
              </div>
              <div className="flex w-full justify-center bg-gradient-to-t from-slate-200">
                {prizes[8].data.map((e) => {
                  return (
                    <p className="p-4 text-4xl">{e.split("").join(" ")}</p>
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
            <div className="w-full">
              <div className="grid grid-cols-5">
                {prizes[1].data.map((e) => {
                  return (
                    <p className="flex h-10 items-center justify-center border">
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
            <div className="w-full">
              <div className="grid grid-cols-5">
                {prizes[2].data.map((e) => {
                  return (
                    <p className="flex h-10 items-center justify-center border">
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
            <div className="w-full text-center">
              <div className="grid grid-cols-5">
                {prizes[3].data.map((e) => {
                  return (
                    <p className="flex h-10 items-center justify-center border">
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
            <div className="w-full text-center">
              <div className="grid grid-cols-5">
                {prizes[4].data.map((e) => {
                  return (
                    <p className="flex h-10 items-center justify-center border">
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AppLotteryChecker;
