// Instantiation of the database connection using mongoose.

import mongoose from 'mongoose';

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(process.env.DATABASE_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  return handler(req, res);
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB.');
});

export default connectDb;
