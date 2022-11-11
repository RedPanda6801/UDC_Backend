// 지역 DB를 따로 두는 걸로 하자. 조회가 많기 때문
const Sequelize = require("sequelize");

module.exports = class Reply extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        context: {
          type: Sequelize.STRING(100),
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
        modelName: "Reply",
        tableName: "Replys",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Reply.belongsTo(db.Comment);
    db.Reply.belongsTo(db.User);
  }
};
