const express = require("express");

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const mongoUri =
  "mongodb+srv://blog123:blog321@cluster0.w3xmqjt.mongodb.net/myBlog?retryWrites=true&w=majority";

mongoose.connect(mongoUri);
app.use(bodyParser.json());
const port = process.env.POST || 4000;
app.listen(port);
var cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
////Schema///
const blogSchema = mongoose.Schema({
  day: String,
  blog: String,
});

const blog = mongoose.model("blog", blogSchema);

//////////////////////////////////////////////
app.get("/api/getblog/:day", (req, res) => {
  blog.find({ day: req.params.day }, (err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
});

app.get("/api/getblogs", (req, res) => {
  blog.find((err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
});

app.delete("/api/deleteblog/:day", (req, res) => {
  blog.deleteOne({ day: req.params.day }, (err, doc) => {
    if (err) return console.log(err);
    res.json("blog deleted");
  });
});

app.post("/api/updateblog", (req, res) => {
  const day = req.body.day;

  const blogContent = req.body.blog;
  blog.updateOne(
    { day: day },
    {
      $set: { blog: blogContent },
    },
    (err, doc) => {
      if (err) return console.log(err);
      res.json("blog updated");
    }
  );
});

app.post("/api/addblog", (req, res) => {
  const addblog = new blog({
    day: req.body.day,
    blog: req.body.blog,
  });
  addblog.save((err, doc) => {
    if (err) return console.log(err);
    res.json("successfully posted blog");
  });
});

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-Width, Content-Type, Accept"
//   );
//   next();
// });
