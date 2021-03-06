require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABSE_HOST,
  port: process.env.DATABSE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    // timezone: 'America/Sao_Paulo',
  },
  // timezone: 'America/Sao_Paulo',

};
