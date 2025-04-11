import mongoose from 'mongoose';
import config from '../config/config.js';

const connectDB = () => {
  mongoose.connect(config.MONGO_URL, {
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
};

export default connectDB;
