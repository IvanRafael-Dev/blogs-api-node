const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,    
  }, { timestamps: false, tableName: 'BlogPosts' });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return blogPost;
};

module.exports = BlogPost;

// const {
//   Model,
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class BlogPost extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   BlogPost.init({
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     userId: DataTypes.INTEGER,
//   }, {
//     sequelize,
//     modelName: 'BlogPost',
//   });
//   return BlogPost;
// };