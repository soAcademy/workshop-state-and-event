import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Hashtags = () => {
  const [allHashtags, setAllHashtags] = useState([]);

  useEffect(() => {
    const getSumHashtagsFunc = () => {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/twitter/getSumHashtags",
        headers: {},
      };

      const result = axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      return result;
    };

    const getHashtagsWithInclude = () => {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/twitter/getHashtags",
        headers: {},
      };

      const result = axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

      // console.log(result);
      return result;
    };

    const mergeData = async () => {
      const allDataHash = await getHashtagsWithInclude();
      const resultSum = await getSumHashtagsFunc();

      const newArr = resultSum?.map((sum) => ({
        ...sum,
        topic: allDataHash?.filter((hash) => hash.id === sum.hashtagId)[0]
          .topic,
      }));
      // console.log(newArr);
      setAllHashtags(newArr);
    };

    mergeData();
  }, []);

  return (
    <>
      <div className="homeBlock">
        <div className="postsBlock text-slate-500">
          <h1 className="text-xl text-center mb-4">#Hashtags</h1>
          {allHashtags.map((hash) => (
            <Link key={hash.hashtagId} to={`/hashtag/${hash.hashtagId}`}>
              <button className="w-full hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full mb-2 p-4 px-8">
                <div className="flex justify-between">
                  <div>{hash.topic}</div>
                  <div>{hash._count.hashtagId}</div>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
