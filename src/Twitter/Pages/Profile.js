import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ContextUserId } from "../twitter";
import { PostsBlock } from "../Components/PostsBlock";

export const Profile = () => {
  const { userId } = useContext(ContextUserId);
  const [dataProfile, setDataProfile] = useState([]);
  const [selfPosts, setSelfPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    reloadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, userId]);

  const reloadPage = () => {
    const getUserProfileFunc = () => {
      const data = JSON.stringify({
        id: id === undefined ? userId : Number(id),
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/twitter/getUserProfile",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setDataProfile(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const getPostByUserFunc = () => {
      const data = JSON.stringify({
        userId: id === undefined ? userId : Number(id),
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/twitter/getPostByUser",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setSelfPosts(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getUserProfileFunc();
    getPostByUserFunc();
  };

  return (
    <>
      <div className="profileBlock mb-4">
        <div className="flex justify-center mb-2">
          <img
            className="w-[150px] h-[150px] object-cover rounded-full"
            src={dataProfile.image}
            alt="userImage"
          />
        </div>
        <div className="nameBlock flex justify-center text-2xl mb-2">
          {dataProfile.username}
        </div>
        <div className="text-center">About: bha bha ...</div>
      </div>

      <hr />
      <PostsBlock allPosts={selfPosts} />
    </>
  );
};
