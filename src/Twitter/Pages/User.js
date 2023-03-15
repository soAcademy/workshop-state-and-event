import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
    <Container maxWidth="sm">
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={userProfile?.name}
          sx={{ m: 1, bgcolor: "secondary.main", width: 64, height: 64 }}
        />
        <Typography component="h1" variant="h5">
          {userProfile?.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {userProfile?.bio}
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {userProfile?.tweets.map((tweet, idx) => (
            <>
              <ListItem alignItems="flex-start" key={tweet.id}>
                <ListItemAvatar>
                  <Avatar
                    alt={userProfile?.name}
                    // src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={tweet.tweetText}
                  secondary={new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                    timeStyle: "long",
                    timeZone: "Asia/Bangkok",
                  }).format(Date.parse(tweet.createdAt))}
                />
              </ListItem>
              {idx < userProfile.tweets.length - 1 && (
                <Divider component="li" />
              )}
            </>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default User;
