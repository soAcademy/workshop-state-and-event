import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/twitter/user/${id}`,
    })
      .then((response) => setUserProfile(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <h1>User ID: {id}</h1>
      <h2>Name: {userProfile?.name}</h2>
      <ul>
        {userProfile?.tweets.map((tweet) => (
          <li>
            <p>{tweet.tweetText}</p>
            <small>{tweet.createdAt}</small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
