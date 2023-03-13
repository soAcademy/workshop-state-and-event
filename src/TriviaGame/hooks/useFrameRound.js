import { useState, useEffect } from "react";
import axios from "axios";

export const useFrameRound = ({ frame }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getRecords = () => {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/triviaGame/getRounds",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setRecords(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    frame === "record" && getRecords();
  }, [frame]);

  return { records, setRecords };
};
