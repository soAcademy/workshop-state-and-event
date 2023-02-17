import { useState } from "react";

export const useCheckLotte = ({ inputNumber, datasLottery }) => {
  const [prizes, setPrizes] = useState([]);

  const checkLotto = () => {
    // console.log(inputNumber);
    const prizesArr = inputNumber
      .split("\n")
      ?.filter((r) => r !== "" && r.length === 6)
      .map((eachInput) => {
        const checkall = datasLottery
          .map((data) => {
            const check =
              eachInput.trim().length === 6
                ? data.value.includes(eachInput.trim())
                  ? true
                  : data.value.includes(eachInput.trim().substring(0, 3)) ||
                    data.value.includes(eachInput.trim().substring(3)) ||
                    data.value.includes(eachInput.trim().substring(4))
                  ? { prize: data.prize, thaiBaht: data.thaiBaht }
                  : false
                : false;

            // console.log("check", check);
            return check
              ? { prize: data.prize, thaiBaht: data.thaiBaht }
              : false;
          })
          .filter((r) => r !== false);
        // console.log(checkall);

        return {
          number: eachInput.trim(),
          result:
            checkall.length > 0 ? checkall : [{ prize: "0", thaiBaht: 0 }],
        };
      });
    // console.log(prizesArr);
    setPrizes(prizesArr);
  };

  return { prizes, setPrizes, checkLotto };
};
