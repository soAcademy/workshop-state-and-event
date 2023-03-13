import { useState } from "react";

export const useSetPlayerName = () => {
  const [username, setUsername] = useState("");
  return { username, setUsername };
};
