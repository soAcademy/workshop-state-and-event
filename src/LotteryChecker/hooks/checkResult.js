const genResultText = ({ prizes, _result }) => {
  const result = _result;
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
            text:
              e.wonIndex === 8
                ? "ถูกรางวัลข้างเคียงรางวัลที่ 1"
                : `ถูกรางวัลที่ 
                ${
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

export const checkResult = ({ queryNumbers, prizes }) => {
  const _result = queryNumbers?.map((e) => {
    const wonFirstThree =
      e.length === 3 || e.length === 6
        ? prizes[7]?.data.findIndex((i) => i.includes(e.slice(0, 3)))
        : -1;
    const wonLastThree =
      e.length === 3 || e.length === 6
        ? e.length === 6
          ? prizes[5]?.data.findIndex((i) => i.includes(e.slice(3, 6)))
          : prizes[5]?.data.findIndex((i) => i.includes(e))
        : -1;
    const wonLastTwo =
      e.length === 2 || e.length === 6
        ? e.length === 6
          ? prizes[6]?.data.findIndex((i) => i.includes(e.slice(4, 6)))
          : prizes[6]?.data.findIndex((i) => i.includes(e))
        : -1;
    const wonIndex =
      e.length === 6 ? prizes?.findIndex((i) => i.data.includes(e)) : -1;
    return {
      number: e,
      wonFirstThree: wonFirstThree,
      wonLastThree: wonLastThree,
      wonLastTwo: wonLastTwo,
      wonIndex: wonIndex,
    };
  });
  return genResultText({ _result, prizes });
};
