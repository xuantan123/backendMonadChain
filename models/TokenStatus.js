const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TokenStatus = sequelize.define('TokenStatus', {
    tokenId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    currentSupply: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxSupplyForToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uniqueMinters: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isFull: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    timeRemaining: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTimestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endTimestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'token_statuses',
    timestamps: true,
  });
  return TokenStatus;
}; 