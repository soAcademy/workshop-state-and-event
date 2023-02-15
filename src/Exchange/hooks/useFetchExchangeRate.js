import React, { useState, useEffect } from "react";
import axios from "axios";

// todo 1 : create CustomHook 1 : Call API converter part
export const useFetchExchangeRate = ({ authToken }) => {
  // todo 1.1 : ย้าย state
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  // todo 1.3 : ย้าย useEffect ก้อนที่ดึง API เส้นที่เอาแปลงสกุลเงิน :
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeRates = res.data;
      const _currencyLists = Object.keys(_exchangeRates.rates);
      console.log(_currencyLists);
      setExchangeRates(_exchangeRates);
      setCurrencyLists(_currencyLists);
    });
  }, []);
  // todo 1.2 : return state
  return {
    exchangeRates,
    currencyLists,
  };
};
