import { useState, useEffect } from "react";
import axios from "axios";
import { PostsBlock } from "../Components/PostsBlock";

export const Home = () => {
  const [allPosts, setAllposts] = useState([]);

  useEffect(() => {
    reloadPage();
  }, []);

  const reloadPage = () => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/twitter/getPosts",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setAllposts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="homeBlock">
        <PostsBlock allPosts={allPosts} />
      </div>
    </>
  );
};
