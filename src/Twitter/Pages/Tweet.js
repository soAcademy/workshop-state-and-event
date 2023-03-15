import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Tweet = () => {
  const { id } = useParams();
  const [tweet, setTweet] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/twitter/tweet/${id}`,
    })
      .then((response) => setTweet(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <Container maxWidth="sm">
      {tweet !== undefined && (
        <>
          <Card
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              marginTop: 8,
            }}
          >
            <Link to={`/user/${tweet.tweetingUser.id}`}>
              <CardHeader
                avatar={
                  <Avatar
                    alt={tweet.tweetingUser.name}
                    sx={{ m: 1, bgcolor: "secondary.main" }}
                  />
                }
                title={tweet.tweetingUser.name}
                subheader={`@${tweet.tweetingUser.id}`}
              />
            </Link>
            <CardContent>
              <Typography paragraph>{tweet.tweetText}</Typography>
              <Typography variant="body2" color="text.secondary">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "full",
                  timeStyle: "long",
                  timeZone: "Asia/Bangkok",
                }).format(Date.parse(tweet.createdAt))}
              </Typography>
            </CardContent>
          </Card>
          {tweet.childTweets.length > 0 && (
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {tweet.childTweets.map((childTweet, idx) => (
                <React.Fragment key={childTweet.id}>
                  <Link to={`/tweet/${childTweet.id}`}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt={childTweet.tweetingUser.name}
                          // src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={childTweet.tweetText}
                        secondary={new Intl.DateTimeFormat("en-US", {
                          dateStyle: "full",
                          timeStyle: "long",
                          timeZone: "Asia/Bangkok",
                        }).format(Date.parse(childTweet.createdAt))}
                      />
                    </ListItem>
                  </Link>
                  {idx < tweet.childTweets.length - 1 && (
                    <Divider component="li" />
                  )}
                </React.Fragment>
              ))}
            </List>
          )}
        </>
      )}
    </Container>
  );
};

export default Tweet;
