// 지역 DB를 따로 두는 걸로 하자. 조회가 많기 때문
const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        context: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        report: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Comment",
        tableName: "Comments",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.Post);
    db.Comment.belongsTo(db.User);
    db.Comment.hasMany(db.CommentLike);
    db.Comment.hasMany(db.CommentDislike);
  }
};
