const express = require('express')
const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const len = kidneys.length;

  res.send("you have " + len + " kidneys");
});

app.use(function(err ,req ,res ,next){
  res.json({
    msg: "something is up with our server"
  })
})



app.listen(3000);