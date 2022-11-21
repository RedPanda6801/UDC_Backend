// 지역 DB를 따로 두는 걸로 하자. 조회가 많기 때문
const Sequelize = require("sequelize");

module.exports = class PostReport extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        postReportDetail: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "PostReport",
        tableName: "PostReports",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.PostReport.belongsTo(db.Post);
  }
};
