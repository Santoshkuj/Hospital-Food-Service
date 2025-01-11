import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/dbConnect.js';
import patientRouter from './routes/patientRoutes.js';
import dietChartRouter from './routes/dietChartRoutes.js';
import mealBoxRouter from './routes/mealBoxRoutes.js';
import seedUsers from './seedUsers.js';
import userRouter from './routes/userRoutes.js';

config();
const app = express();

connectDB()

seedUsers()
app.use(cors({
  origin: process.env.FRONTENT_URL,
  credentials:true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users',userRouter);
app.use('/api/patients',patientRouter);
app.use('/api/diet-chart',dietChartRouter);
app.use('/api/mealbox',mealBoxRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});