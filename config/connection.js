const { Sequelize } = require('sequelize');
let { QueryTypes } = require('sequelize');

const sequelize = new Sequelize({
    pool: {
        max: 1000,
        min: 0,
        idle: 200000,
        acquire: 1000000,
    },
    database: "book_api",
    username: "postgres",
    password: "768892768892",
    host: "localhost",
    dialect:'postgres',
    port: "5432",
    ssl: true,
    logging: false
});

module.exports = sequelize