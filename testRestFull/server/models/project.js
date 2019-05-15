'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    name: DataTypes.STRING
  }, {});
  project.associate = function(models) {
    // associations can be defined here
    project.belongsToMany(models.user, {
      through: 'userproject',
      foreignKey: 'project_id',
    })
  };
  return project;
};
