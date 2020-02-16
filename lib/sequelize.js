// Instantiation of the database connection using the Sequelize ORM.

import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PW,
  {
    host: process.env.DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT,
    logging: false,
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

/** MODEL DEFINITION */

const Shoe = sequelize.define('shoe', {
  shoeId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  verifiedEmail: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isMaleShoe: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  isTrailShoe: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  size: {
    /** NOTE: Sizes to be defined in US size */
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  kilometers: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
  },
  images: {
    type: Sequelize.TEXT,
    defaultValue: true,
  },
  available: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  ships: Sequelize.BOOLEAN,
  intShipping: Sequelize.BOOLEAN,
  paidShipping: Sequelize.BOOLEAN,
});

sequelize
  .sync()
  .then(() => {
    console.log('Database: tables synced successfully.');
  })
  .catch((err) => {
    console.log('Database: tables synced failed noting error:', err);
  });

export default Shoe;
