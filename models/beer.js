module.exports = function(sequelize, DataTypes) {
  
  var Beer = sequelize.define("Beer", {
    breweryName:{
      type: DataTypes.STRING,
      allowNull: false
    },

    beerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    beerStyle: {
      type: DataTypes.STRING,
      allowNull: false
    },

    review: {
      type: DataTypes.STRING,
      allowNull: false
    },

  });
  return Beer;
};
