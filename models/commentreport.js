// 지역 DB를 따로 두는 걸로 하자. 조회가 많기 때문
const Sequelize = require("sequelize");

module.exports = class CommentReport extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        commentReportDetail: {
          type: Sequelize.INTEGER,
          allowNull: true, 
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "CommentReport",
        tableName: "CommentReports",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.CommentReport.belongsTo(db.Comment)
    db.CommentReport.belongsTo(db.Report)
  }
};
