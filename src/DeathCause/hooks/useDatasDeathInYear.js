import { useState, useEffect } from "react";
import deathDatas from "../thailand-death-cause.json";

export const useDatasDeathInYear = ({ yearSelected }) => {
  const [datasDeathInYear, setDatasDeathInYear] = useState([]);

  useEffect(() => {
    setDatasDeathInYear(
      deathDatas.filter((data) => data.year === yearSelected)
    );
  }, [yearSelected]);

  return { datasDeathInYear, setDatasDeathInYear };
};
