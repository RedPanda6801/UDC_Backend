const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const User = require("./user");
const Cafe = require("./cafe");
const Question = require("./question");
const Stamp = require("./stamp");
const Solution = require("./solution");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.Cafe = Cafe;
db.Question = Question;
db.Stamp = Stamp;
db.Solution = Solution;

User.init(sequelize);
Cafe.init(sequelize);
Question.init(sequelize);
Stamp.init(sequelize);
Solution.init(sequelize);

User.associate(db);
Cafe.associate(db);
Question.associate(db);
Stamp.associate(db);
Solution.associate(db);

module.exports = db;
