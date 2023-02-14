import { useEffect, useState } from "react"; 

export const useSelectedCause = () => {
  const [selectedCause, setSelectedCause] = useState();
  const [currentYear, setCurrentYear] = useState(2558);
  useEffect(() => {
    setSelectedCause(undefined);
  }, [currentYear]);
  return {
    currentYear,
    setCurrentYear,
    selectedCause,
    setSelectedCause,
  };
};