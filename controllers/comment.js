const { Post, Comment } = require("../models");

// 게시글에 해당하는 모든 댓글을 불러오기
exports.searchComment = async (req, res, next) => {
  try {
    // 받아온 데이터를 변수에 저장
    const { postId } = req.params;
    // 게시글 있는지 확인
    if (await Post.findOne({ where: { id: postId } })) {
      console.error("Post is Not Found");
      return res.status(404).json({
        message: "Post is Not Found",
      });
    }
    const comments = await Comment.findAll({ where: { PostId: postId } });
    return res.status(200).json({
      message: "Find Success",
      data: comments,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.createComment = async (req, res, next) => {
  try {
    // 받아온 변수를 데이터에 저장
    const { context } = req.body;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.updateComment = async (req, res, next) => {
  try {
    // 받아온 데이터를 변수에 저장
    const { postId } = req.params;
    const { context } = req.body;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.deleteComment = async (req, res, next) => {
  try {
    // 받아온 데이터르 변수에 저장
    const { postId } = req.params;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
