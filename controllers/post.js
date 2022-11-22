const { Post } = require("../models");

// 게시물 전체 조회 API(카테고리 별로 조회가 가장 큰 범주 인듯)
exports.searchPost = async (req, res, next) => {
  try {
    // 게시물 전체 조회
    const allPost = await Post.findAll({});
    return res.status(200).json({
      message: "Find Success",
      data: allPost,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시물 단일 조회 API(게시물 클릭 시 세부 내용 조회)
exports.searchOnePost = async (req, res, next) => {
  try {
    // 게시물 아이디를 가져옴
    const { postId } = req.params;
    // 게시물 아이디에 따른 조회
    const post = await Post.findOne({ where: { id: postId } });
    // 게시물이 없을 경우 예외처리
    if (!post) {
      console.error("That Post is Not Found");
      return res.status(404).json({
        message: "That Post is Not Found",
      });
    }
    // 성공했을 경우에 json으로 보내줌
    return res.status(200).json({
      message: "Find One Success",
      data: post,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시물 추가 API
exports.createPost = async (req, res, next) => {
  try {
    // body에 담긴 데이터를 변수에 저장
    const { title, userId, context, image } = req.body;
    // 이미지가 있으면 넣고 아니면 null이 되는 기본 게시글 추가
    const newPost = await Post.create({
      title,
      UserId: userId,
      context,
      image: image ? image : null,
      report: 0,
      view: 0,
    });
    console.log("Create Success");
    return res.status(200).json({
      message: "Create Success",
      data: newPost,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
// 게시물 수정 API (본인이 수정하지 않을 경우의 예외 처리가 필요)
exports.updatePost = async (req, res, next) => {
  try {
    // 받은 데이터들을 변수에 저장
    const { postId } = req.params;
    const { title, context, image } = req.body;
    // 게시물 찾기
    const lastPost = await Post.findOne({ where: { id: postId } });
    // 게시물이 없으면 에러 처리
    if (!lastPost) {
      console.error("Post is Not Found");
      return res.status(404).json({
        message: "Post is Not Found",
      });
    }
    // 게시물 수정(제목, 내용, 사진)
    const updateUserPost = await Post.update({
      title: title ? title : lastPost.title,
      context: context ? context : lastPost.context,
      image: image ? image : lastPost.image,
    });
    console.log("Post update Success");
    return res.status(200).json({
      message: "Update Success",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시물 삭제 API(본인 확인에 대한 절차 필요)
exports.deletePost = async (req, res, next) => {
  try {
    // 데이터에서 받은 값 변수에 저장
    const { postId } = req.params;
    // 게시물 찾기
    if (!(await Post.findOne({ where: { id: postId } }))) {
      console.error("Post is Not Found");
      return res.status(404).json({
        message: "Post is Not Found",
      });
    }
    const deleteUserPost = await Post.destroy({
      where: { id: postId },
    });
    console.log("Delete Success");
    return res.status(200).json({
      message: "Delete Succcess",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
