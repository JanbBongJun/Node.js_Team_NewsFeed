"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        targetKey: "userId",
        foreignKey: "userId",
      });
      this.belongsTo(models.Posts, {
        targetKey: "postId",
        foreignKey: "postId",
      });
    }
  }
  Likes.init(
    {
      LIKE_ID: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      USER_ID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "userId",
        },
        onDelete: "CASCADE",
      },
      POST_ID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Posts",
          key: "postId",
        },
        onDelete: "CASCADE",
      },
    //   createdAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     defaultValue: DataTypes.NOW,
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     defaultValue: DataTypes.NOW,
    //   },
    },
    {
      sequelize,
      modelName: "Likes",
      timestamps:true
    }
  );
  return Likes;
};
