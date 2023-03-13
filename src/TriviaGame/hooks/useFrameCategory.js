import { useState, useEffect } from "react";
import axios from "axios";

export const useFrameCategory = ({ frame }) => {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState(undefined);

  useEffect(() => {
    const getCategories = () => {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/triviaGame/getCategories",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setCategories(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    frame === "category" && getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frame]);

  return { categories, setCategories, categorySelected, setCategorySelected };
};
