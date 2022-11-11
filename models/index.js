const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const User = require("./user");
const Post = require("./post");
const PostLike = require("./postlike");
const PostDislike = require("./postdislike");
const Comment = require("./comment");
const CommentLike = require("./commentlike");
const CommentDislike = require("./commentdislike");
const Hashtag = require("./hashtag");
const Category = require("./category");
const Reply = require("./reply");
const Report = require("./report");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.PostLike = PostLike;
db.PostDislike = PostDislike;
db.Comment = Comment;
db.CommentLike = CommentLike;
db.CommentDislike = CommentDislike;
db.Hashtag = Hashtag;
db.Category = Category;
db.Reply = Reply;
db.Report = Report;

User.init(sequelize);
Post.init(sequelize);
PostLike.init(sequelize);
PostDislike.init(sequelize);
Comment.init(sequelize);
CommentLike.init(sequelize);
CommentDislike.init(sequelize);
Hashtag.init(sequelize);
Category.init(sequelize);
Reply.init(sequelize);
Report.init(sequelize);

User.associate(db);
Post.associate(db);
PostLike.associate(db);
PostDislike.associate(db);
Comment.associate(db);
CommentLike.associate(db);
CommentDislike.associate(db);
Hashtag.associate(db);
Category.associate(db);
Reply.associate(db);
Report.associate(db);

module.exports = db;