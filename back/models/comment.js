const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        // UserId: 1
        // PostId: 3
      },
      {
        modelName: 'Comment',
        tableName: 'comments',
        charset: 'utf8mb4', //이모티콘 쓸려면 mb4를 추가
        collate: 'utf8mb4_general_ci', // 한글 저장
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};

// module.exports = (sequelize, DataTypes) => {
//   const Comment = sequelize.define(
//     'Comment',
//     {
//       content: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       // UserId: 1
//       // PostId: 3
//     },
//     {
//       charset: 'utf8mb4', //이모티콘 쓸려면 mb4를 추가
//       collate: 'utf8mb4_general_ci', // 한글 저장
//     }
//   );
//   Comment.associate = (db) => {
//     db.Comment.belongsTo(db.User);
//     db.Comment.belongsTo(db.Post);
//   };
//   return Comment;
// };
