import DeliveryPersonnel from '../models/deliveryPersonnel.js';
import MealBox from '../models/mealBoxSchema.js';

// Add delivery personnel
export async function addDeliveryPersonnel(req, res) {
  try {
    const personnel = new DeliveryPersonnel(req.body)
    await personnel.save();
    res.status(201).json(personnel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Assign meal boxes to delivery personnel
export async function assignMealBox(req, res) {
  try {
    const { personnelId, mealBoxId } = req.body;

    const personnel = await DeliveryPersonnel.findById(personnelId);
    const mealBox = await MealBox.findById(mealBoxId);

    if (!personnel || !mealBox) {
      return res.status(404).json({ message: 'Personnel or MealBox not found' });
    }

    mealBox.assignedTo = personnelId;
    await mealBox.save();

    personnel.assignedMealBoxes.push(mealBoxId);
    await personnel.save();

    res.status(200).json({ message: 'Meal box assigned successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get all assigned meal boxes for personnel
export async function getAssignedMealBoxes(req, res) {
  try {
    const mealBoxes = await MealBox.find({ assignedTo: req.params.personnelId }).populate('patientId dietChartId');
    res.status(200).json(mealBoxes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}