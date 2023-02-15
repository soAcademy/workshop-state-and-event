import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchExchange = ({ apiToken }) => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  console.log("useFetchExchangeCheck");
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: apiToken,
      },
    }).then((response) => {
      const tmpExchangeRates = response.data;
      const tmpCurrencyLists = Object.keys(tmpExchangeRates.rates);
      // Object.keys เพื่อต้องการเอาชื่อของ สกุลเงินมาแสดง
      console.log("ApiData", response.data);
      console.log("CurrencyLists", tmpCurrencyLists);
      setCurrencyLists(tmpCurrencyLists);
      setExchangeRates(tmpExchangeRates);
    });
  }, []);
  return { exchangeRates, currencyLists };
};
