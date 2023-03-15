import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ContextUserId } from "../twitter";
import { Link, useParams } from "react-router-dom";

export const NewPost = () => {
  const { userId } = useContext(ContextUserId);
  const [postById, setPostById] = useState([]);
  const [newPost, setNewPost] = useState("");
  const { id } = useParams();

  useEffect(() => {
    console.log(id);

    const getPostById = () => {
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
          setPostById(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    id !== undefined && Number(id) > 0 && getPostById();
  }, [id]);

  const submitPostBtn = () => {
    console.log("newPost", newPost);
    const findHashArr = newPost.split("#");
    // console.log("findHashArr", findHashArr);
    const postDetail = findHashArr[0].trim();
    // console.log(postDetail);
    if (postDetail !== "") {
      const findHashtags = [...Array(findHashArr.length - 1)].reduce(
        (acc, r, idx) => {
          // console.log(/^\s/.test(findHashArr[idx + 1]));
          const isWs = /^\s/.test(findHashArr[idx + 1]);
          if (!isWs) {
            // console.log(findHashArr[idx + 1].search(" "));
            const checkWs = findHashArr[idx + 1].search(" ");
            const result =
              checkWs > 0
                ? findHashArr[idx + 1].substring(0, checkWs)
                : findHashArr[idx + 1];
            acc = [...acc, result];
          }
          return acc;
        },
        []
      );
      // console.log(findHashtags);

      const data = JSON.stringify({
        userId: userId,
        detail: postDetail,
        postId: id === undefined ? undefined : Number(id),
        hashtags: findHashtags.map((hashtag) => ({ hashtag: hashtag })),
      });
      console.log(data);

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/twitter/CreateUserPost",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setNewPost("");
          const url = id === undefined ? "/" : `/post/${id}`;
          window.location.replace(url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      {postById.length > 0 && (
        <div className="mb-2">
          <div className="flex gap-1">
            <div className="w-1/12">
              <Link to={`/profile/${postById[0].userId}`}>
                <img
                  className="min-w-[40px] h-[40px] aspect-[1/1] object-cover rounded-full"
                  src={postById[0].user.image}
                  alt=""
                />
              </Link>
            </div>
            <div className="w-11/12">
              <div className="flex justify-between mb-2">
                <Link
                  to={`/profile/${postById[0].userId}`}
                  className="text-slate-400 hover:text-slate-500 px-2.5"
                >
                  {postById[0].user.username}
                </Link>
                <div className="text-slate-400 text-[10px]">{`${
                  postById[0].createdAt.split("T")[0]
                } ${postById[0].createdAt.split("T")[1].substring(0, 5)}`}</div>
              </div>
              <div className="px-2.5">
                <Link to={`/post/${postById[0].id}`}>
                  {postById[0].detail}
                  <br />
                  <br />
                </Link>
                <div className="hashtagBlock flex justify-between">
                  <div className="flex gap-x-2">
                    {postById[0].hashtagOnPosts.map((hashtag) => (
                      <div key={hashtag.id}>
                        <Link
                          to={`/hashtag/${hashtag.hashtag.id}`}
                          className="font-light text-slate-300 hover:text-slate-500"
                        >
                          #{hashtag.hashtag.topic}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      )}
      <div className="newPostBlock mb-6">
        <div className="newPostDetail mb-2">
          <textarea
            rows="6"
            onChange={(e) => setNewPost(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Write your tweet here..."
            value={newPost}
          ></textarea>
        </div>
        <div>
          <button
            onClick={() => submitPostBtn()}
            className="bg-cyan-200 hover:bg-cyan-300 text-slate-500 rounded-full p-2 px-4 "
          >
            Tweet
          </button>
        </div>
      </div>
    </>
  );
};
