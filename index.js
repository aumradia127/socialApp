const express = require("express");
const format = require("date-format");
const app = express();
const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<em>Hello world! We are Learning Code Online</em>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instagramSocial = {
    username: "aumradia127",
    followers: 496,
    follows: 432,
    date: format.asString("dd[MM] hh:mm:ss", new Date()),
  };
  res.status(200).json(instagramSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebookSocial = {
    username: "aumradia127@page",
    followers: 1100,
    follows: 15,
    date: format.asString("hh:mm:ss", new Date()),
  };
  res.status(200).json(facebookSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinSocial = {
    username: "Aum Radia",
    followers: 496,
    follows: 432,
    date: format.asString("hh:mm:ss O", new Date()),
  };
  res.status(200).json(linkedinSocial);
});

// colon in necessary if we want to return value from URL
app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(400).json({ params: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
