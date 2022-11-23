const express = require("express");
const route = express.Router();
const {
  searchComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comment");

// Comment 조회
route.get("/:postId", searchComment);
// Commnet 추가
route.post("/create", createComment);
// Comment 수정
route.put("/update/:postId", updateComment);
// Comment 삭제
route.delete("/delete/:postId", deleteComment);

module.exports = route;
