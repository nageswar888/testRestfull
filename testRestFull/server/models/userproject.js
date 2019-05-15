'use strict';
module.exports = (sequelize, DataTypes) => {
  const userproject = sequelize.define('userproject', {
    project_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  userproject.associate = function(models) {
    // associations can be defined here

  };
  return userproject;
};
