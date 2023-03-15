import { useState, useEffect } from "react";
import axios from "axios";
import { PostsBlock } from "../Components/PostsBlock";
import { useParams } from "react-router-dom";

export const Post = () => {
  const [allPosts, setAllposts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    reloadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const reloadPage = () => {
    const data = JSON.stringify({
      postId: Number(id),
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/twitter/getPostById",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
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
        <PostsBlock allPosts={allPosts} page={'post'}/>
      </div>
    </>
  );
};
