import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/route.js';
import bodyParser from 'body-parser';

dotenv.config();
const port = 5000;
const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGO_DB_CONNECTION).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error: ', error);
});
app.use('/api/',router);

app.use((err,req,res,next) => {
const statusCode = err.statusCode || 500;
const message = err.message || 'Internal Server Error';
return res.status(statusCode).json({
  success: false,
  message,
  statusCode
});
});




app.listen(port, process.env.HOST ,() => {
  console.log(`Server is running on http://${process.env.HOST}:${port}`);
});