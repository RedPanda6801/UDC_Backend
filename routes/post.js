const express = require("express");
const route = express.Router();

const {
  searchPost,
  searchOnePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post");

// Post 전체 조회
route.get("/", searchPost);
// Post 단일 조회
route.get("/search-one/:postId", searchOnePost);
// Post 추가
route.post("/create", createPost);
// Post 수정
route.put("/update/:postId", updatePost);
// Post 삭제
route.delete("/delete/:postId", deletePost);

module.exports = route;
