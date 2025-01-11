import { countDocuments } from '../models/mealBoxSchema.js';

export async function getPantryDashboardData(req, res) {
  try {
    const pendingPreparations = await countDocuments({ deliveryStatus: 'Pending', assignedTo: null });
    const deliveredMeals = await countDocuments({ deliveryStatus: 'Delivered' });

    res.status(200).json({
      pendingPreparations,
      deliveredMeals,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}