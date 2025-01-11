import MealBox from '../models/mealBoxSchema.js';

// Create a new meal box
export async function createMealBox(req, res) {
  try {
    const mealBox = new MealBox(req.body);
    await mealBox.save();
    res.status(201).json(mealBox);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Mark a meal box as delivered
export async function markMealBoxAsDelivered(req, res) {
  try {
    const mealBox = await findByIdAndUpdate(req.params.id, { deliveryStatus: 'Delivered' }, { new: true });
    if (!mealBox) {
      return res.status(404).json({ message: 'Meal box not found' });
    }
    res.status(200).json(mealBox);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}