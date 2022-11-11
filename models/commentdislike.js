// 지역 DB를 따로 두는 걸로 하자. 조회가 많기 때문
const Sequelize = require("sequelize");

module.exports = class CommentDislike extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "CommentDislike",
        tableName: "CommentDislikes",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.CommentDislike.belongsTo(db.Comment);
    db.CommentDislike.belongsTo(db.User);
  }
};
