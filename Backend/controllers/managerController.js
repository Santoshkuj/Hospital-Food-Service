
import { countDocuments as mealboxCount } from '../models/MealBox.js';
import { countDocuments as patientCount } from '../models/Patient.js';
import { countDocuments as pantryStaffCount } from '../models/PantryStaff.js';

export async function getDashboardData(req, res) {
  try {
    const totalPatients = await patientCount();
    const pendingDeliveries = await mealboxCount({ deliveryStatus: 'Pending' });
    const deliveredMeals = await mealboxCount({ deliveryStatus: 'Delivered' });
    const totalPantryStaff = await pantryStaffCount();

    res.status(200).json({
      totalPatients,
      pendingDeliveries,
      deliveredMeals,
      totalPantryStaff,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}