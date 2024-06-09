import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const port = 5000;
const app = express();

mongoose.connect(process.env.MONGO_DB_CONNECTION).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error: ', error);
});


app.listen(port, () => {
  console.log('Server is running on port '+port);
});