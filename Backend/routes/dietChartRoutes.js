import { Router } from 'express';
import { createDietChart, getDietCharts } from '../controllers/dietChartController.js';
import authMiddleware from '../middleware/authMiddleware.js';
authMiddleware
const dietChartRouter = Router();

dietChartRouter.post('/diet-chart',authMiddleware(['HospitalManager']), createDietChart);
dietChartRouter.get('/diet-chart/:patientId',authMiddleware(['HospitalManager']), getDietCharts);

export default dietChartRouter;