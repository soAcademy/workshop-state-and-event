export const LotteryResult = ({ lottoResult }) => {
  console.log("Lottery Result", lottoResult);
  return (
    <div>
      {lottoResult?.resultTexts?.length > 0 && (
        <div className="bg-red-100 m-auto w-2/3 p-5 mt-5 rounded">
          {lottoResult?.resultTexts?.map((r, idx) => (
            <div key={idx}>{r}</div>
          ))}
          <div className="font-bold mt-4">
            คุณถูกหวยงวดนี้ทั้งสิ้น{" "}
            {lottoResult?.totalPrize?.toLocaleString("TH-th")} บาท
          </div>
        </div>
      )}
    </div>
  );
};
