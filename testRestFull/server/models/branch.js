'use strict';
module.exports = (sequelize, DataTypes) => {
  const branch = sequelize.define('branch', {
    branchname: DataTypes.STRING
  }, {});
  branch.associate = function(models) {
    // associations can be defined here
    branch.hasMany(models.student, {
        foreignKey: 'id',
        sourceKey : 'id'
    });
  };
  return branch;
};
