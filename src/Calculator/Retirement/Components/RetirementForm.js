export const RetirementForm = ({setInput}) => {
  return (
    <form
      onChange={(e) => {
        console.log("e :>> ", e);
        const age = Number(e.target.form[0].value);
        const retireAge = Number(e.target.form[1].value);
        const inflation = Number(e.target.form[2].value);
        const deadAge = Number(e.target.form[3].value);
        const cost = Number(e.target.form[4].value);
        const invest = Number(e.target.form[5].value);
        const percentYield = Number(e.target.form[6].value);
        setInput({
          age,
          retireAge,
          inflation,
          deadAge,
          cost,
          invest,
          percentYield,
        });
      }}
      className="mx-auto flex w-2/3 flex-col rounded-xl bg-gray-200"
    >
      <div className="flex">
        <div className="mb-2 w-1/2 space-y-2 p-6 pl-8">
          <p>คุณอายุเท่าไหร่</p>
          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
            className="w-full p-2 px-4"
            defaultValue={25}
          ></input>
          <p>เกษียณตอนอายุ</p>
          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
            className="w-full p-2 px-4"
            defaultValue={55}
          ></input>
          <p>อัตราเงินเฟ้อ (%) </p>
          <input
            type="number"
            className="w-full p-2 px-4"
            defaultValue={4.27}
          ></input>
        </div>
        <div className="w-1/2 space-y-2 p-6 pr-8 ">
          <p>มีอายุถึงกี่ปี</p>
          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
            className="w-full p-2 px-4"
            defaultValue={75}
          ></input>
          <p>ค่าใช้จ่ายต่อเดือน</p>
          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 7))}
            className="w-full p-2 px-4"
            defaultValue={30000}
          ></input>
        </div>
      </div>
      <div className="flex">
        <div className="mb-2 w-1/2 space-y-2 p-6 pl-8">
          <p>เงินลงทุนต่อเดือน</p>
          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 7))}
            className="w-full p-2 px-4"
            defaultValue={3000}
          ></input>
        </div>
        <div className="mb-2 w-1/2 space-y-2 p-6 pl-8">
          <p>ผลตอบแทนต่อปี (%)</p>
          <input
            type="number"
            className="w-full p-2 px-4"
            defaultValue={8}
          ></input>
        </div>
      </div>
    </form>
  );
};

