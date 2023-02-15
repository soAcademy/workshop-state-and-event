export const FinancialPlans = ({financialPlans, retirementSaving, retireAge}) => (
<>
<div className="w-1/2 mx-auto text-center mt-8">
        <h2 className="text-lg font-bold">
          คุณต้องมีเงินเก็บตอนอายุ {retireAge} ปี จำนวน
        </h2>
        <h1 className="text-5xl font-bold text-red-700 mt-4">
          {new Intl.NumberFormat("th-TH").format(
            (retirementSaving / 1000000).toFixed(2)
          )}{" "}
          ล้านบาท
        </h1>
      </div>
<div className="mt-8 w-1/2 mx-auto px-8">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-blue-200">
              <td className="font-bold p-2">อายุ</td>
              <td className="font-bold p-2">ค่าใช้จ่ายต่อปี</td>
              <td className="font-bold p-2">มูลค่าพอร์ตการลงทุน</td>
            </tr>
          </thead>
          <tbody>
            {financialPlans?.map((r, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50 px-4" : "bg-white"}
              >
                <td className="px-2">{r.age}</td>
                <td className="px-2">
                  {new Intl.NumberFormat("th-TH").format(
                    r.livingCostPerYear.toFixed(0)
                  )}
                </td>
                <td className="px-2">
                  {new Intl.NumberFormat("th-TH").format(
                    r.investmentValue.toFixed(0)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
)