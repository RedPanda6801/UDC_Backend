const express = require("express");
const route = express.Router();
const { verifyToken } = require("../libs/middlewares");
const {
  searchPost,
  searchOnePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post");

// Post 전체 조회
route.get("/", verifyToken, searchPost);
// Post 단일 조회
route.get("/search-one/:postId", verifyToken, searchOnePost);
// Post 추가
route.post("/create", verifyToken, createPost);
// Post 수정
route.put("/update/:postId", verifyToken, updatePost);
// Post 삭제
route.delete("/delete/:postId", verifyToken, deletePost);

module.exports = route;
