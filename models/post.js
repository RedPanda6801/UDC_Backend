// 지역 DB를 따로 두는 걸로 하자. 조회가 많기 때문
const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        context: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        views: {
          type: Sequelize.INTEGER,
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
        modelName: "Post",
        tableName: "Posts",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.PostLike);
    db.Post.hasMany(db.PostDislike);
    db.Post.belongsTo(db.Category);
    db.Post.belongsTo(db.Hashtag);
  }
};
