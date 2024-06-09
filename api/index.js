import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const port = 5000;
const app = express();

mongoose.connect(process.env.MONGO_DB_CONNECTION);

app.listen(port, () => {
  console.log('Server is running on port '+port);
});