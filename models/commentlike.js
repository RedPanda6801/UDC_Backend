// 지역 DB를 따로 두는 걸로 하자. 조회가 많기 때문
const Sequelize = require("sequelize");

module.exports = class CommentLike extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "CommentLike",
        tableName: "CommentLikes",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.CommentLike.belongsTo(db.Comment);
    db.CommentLike.belongsTo(db.User);
  }
};
