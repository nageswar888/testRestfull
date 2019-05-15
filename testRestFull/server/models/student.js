'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    name: DataTypes.STRING,
    bid: DataTypes.INTEGER
  }, {});
  student.associate = function(models) {
    // associations can be defined here
    student.belongsTo(models.branch, {
      foreignKey: 'id',
      targetKey : 'id'
    });
  };
  return student;
};
