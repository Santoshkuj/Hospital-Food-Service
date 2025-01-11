import { Router } from 'express';
import { createMealBox, markMealBoxAsDelivered } from '../controllers/mealBoxController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const mealBoxRouter = Router();

mealBoxRouter.post('/meal-box',authMiddleware(['HospitalManager']), createMealBox);
mealBoxRouter.put('/meal-box/:id/deliver', markMealBoxAsDelivered);

export default mealBoxRouter;