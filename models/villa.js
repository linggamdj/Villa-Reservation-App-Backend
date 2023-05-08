'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Villa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Villa.belongsToMany(models.User, { through: models.Booking });
      Villa.belongsToMany(models.User, { through: models.VillaReview });
      Villa.hasMany(models.VillaGallery);
      Villa.hasOne(models.Location);
    }
  }
  Villa.init({
    LocationId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    map_url: DataTypes.STRING,
    image_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Villa',
  });
  return Villa;
};