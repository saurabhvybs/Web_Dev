const express = require("express");

const app = express();

let userRequests = {};

setInterval(() => {
  userRequests = {};
}, 5000);

function rateLimiter(req, res, next) {
  const userId = req.headers["user-id"]; // taking user id from user


  if (userRequests[userId]) {  // if user requests for second time
    userRequests[userId] += 1;
    if (userRequests[userId] > 5) {
      return res.status(429).send("Too many requests, please try again later.");
    }else{
        next();
    }
  } else {    // if user hits for first time 
    userRequests[userId] = 1;
    next();
  }
}

app.use(rateLimiter);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "Saurabh" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ userRequests });
});

app.listen(2001);
