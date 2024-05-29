const express = require('express')
const app = express();
// whenever we give a function or middleware in app.use it simple runs at the first then control reaches else.
app.use(express.json()); // a simple middleware to parse the input into a json 

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const len = kidneys.length;

  res.send("you have " + len + " kidneys");
});
// Global Catches to deal with the error msg
//any wrong input will hit this middleware 
app.use(function(err ,req ,res ,next){
  res.json({
    msg: "something is up with our server"
  })
})



app.listen(3000);
