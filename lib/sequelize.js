// Instantiation of the database connection using the Sequelize ORM.

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PW,
  {
    host: process.env.DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database: connection established.');
  })
  .catch((err) => {
    console.log('Database: unable to establish connection noting error:', err);
  });

// const PartnerData = require('./partnerData.model')(sequelize, Sequelize);
// const PartnerTemplates = require('./partnerTemplates.model')(sequelize, Sequelize);

// module.exports = {
//   PartnerData,
//   PartnerTemplates
// };
