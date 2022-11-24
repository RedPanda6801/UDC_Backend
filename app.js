// npm i
// npx sequelize db:create -> create db based on  config/config.json & models/index.js

const express = require("express");

const path = require("path");
const morgan = require("morgan"); //morgan
const dotenv = require("dotenv");

const { sequelize } = require("./models");
const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comment");
const postRouter = require("./routes/post");
dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev")); // for log

app.use("/", express.static(path.join(__dirname, "public"))); //approach to static file in public folder

app.use(express.json()); //body parser  use req.body
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
// app.use("/reply", reply);

app.use((req, res, next) => {
  if (res.statusCode !== 500) {
    const error = "Not Found";
    console.error(`Router Not Found! - ${req.method}${req.url}`);
    return res.status(error.code).json(error);
  } else next();
});

// 500 처리 미들웨어
app.use((err, req, res) => {
  console.log(req.query.error);
  console.log("error name - ", err.name || "notFound");
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  return res.status(err.status || 500).json(response || err);
});

app.listen(app.get("port"), () => {
  //specify port
  console.log(app.get("port"), "번 포트에서 대기중");
});
