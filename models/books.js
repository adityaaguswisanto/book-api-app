const { DataTypes } = require('sequelize');
const database = require('../config/connection');

const books = database.define("books", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = books