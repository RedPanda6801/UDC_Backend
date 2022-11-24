const express = require("express");
const route = express.Router();
const { verfiyToken } = require("../libs/middlewares");
const {
  searchComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comment");

// Comment 조회
route.get("/:postId", verfiyToken, searchComment);
// Commnet 추가
route.post("/create", verfiyToken, createComment);
// Comment 수정
route.put("/update/:commentId", verfiyToken, updateComment);
// Comment 삭제
route.delete("/delete/:commentId", verfiyToken, deleteComment);

module.exports = route;
