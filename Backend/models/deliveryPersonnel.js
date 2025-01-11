import mongoose from "mongoose";

const deliveryPersonnelSchema = new mongoose.Schema({
    name: String,
    contactInfo: String,
    assignedMealBoxes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MealBox' }],
  });
  
  export default mongoose.model('DeliveryPersonnel', deliveryPersonnelSchema);