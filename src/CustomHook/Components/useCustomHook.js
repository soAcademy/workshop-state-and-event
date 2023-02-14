import React, { useState, useEffect } from "react";
import axios from "axios";

export const useTitle = (text) => {
  const [title, setTitle] = useState(text);
  return { title, setTitle };
};

export const useNumber = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  return { number1, setNumber1, number2, setNumber2, sum, setSum };
};

export const useNumSquare = (num) => {
  const [numSquare, setNumSquare] = useState(0);
  useEffect(() => {
    setNumSquare(Number(num) ** 2);
  }, [num]);
  return { numSquare, setNumSquare };
};

export const useData = () => {
  const [data, setData] = useState("");
  return { data, setData };
};

export const useFetch = ({ method, url, setData }) => {
  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    isFetch &&
      axios({
        method: method,
        url: url,
      }).then((response) => {
        console.log(response);
        setData(response);
      });
  }, [isFetch]);
  return { isFetch, setIsFetch };
};
