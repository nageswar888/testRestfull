'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsToMany(models.project, {
      through: 'userproject',
      foreignKey : 'user_id',
    })
  };
  return user;
};
