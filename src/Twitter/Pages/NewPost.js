import { useState, useContext } from "react";
import axios from "axios";
import { ContextUserId } from "../twitter";

export const NewPost = () => {
  const { userId } = useContext(ContextUserId);
  const [newPost, setNewPost] = useState("");

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
        hashtags: findHashtags.map((hashtag) => ({ hashtag: hashtag })),
      });

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
          // console.log(JSON.stringify(response.data));
          setNewPost("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
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
  );
};
