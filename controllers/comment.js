exports.searchComment = async (req, res, next) => {
  try {
    // 받아온 데이터를 변수에 저장
    const { postId } = req.params;
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
