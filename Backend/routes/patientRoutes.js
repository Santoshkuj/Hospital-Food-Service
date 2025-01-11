import { Router } from 'express';
import { createPatient, getAllPatients, getPatientById, updatePatient, deletePatient } from '../controllers/patientController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const patientRouter = Router();

patientRouter.post('/create',authMiddleware(['Manager']), createPatient);
patientRouter.get('/getall',authMiddleware(['Manager']), getAllPatients);
patientRouter.get('/patients/:id',authMiddleware(['Manager']), getPatientById);
patientRouter.put('/patients/:id',authMiddleware(['Manager']), updatePatient);
patientRouter.delete('/patients/:id',authMiddleware(['Manager']), deletePatient);

export default patientRouter;