import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PostsBlock } from "../Components/PostsBlock";

export const Hashtag = () => {
  const [allPosts, setAllposts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/twitter/getPostByHashtag",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        hashtagId: Number(id),
      }),
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setAllposts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div className="homeBlock">
        <PostsBlock allPosts={allPosts} />
      </div>
    </>
  );
};
