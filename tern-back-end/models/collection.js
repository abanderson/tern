'use strict';
module.exports = (sequelize, DataTypes) => {
  var collection = sequelize.define('collection', {
    name: DataTypes.STRING
  }, {});
  collection.associate = function(models) {
    // associations can be defined here
  };
  return collection;
};