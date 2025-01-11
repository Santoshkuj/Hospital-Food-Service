import { Schema, model } from 'mongoose';

const mealBoxSchema = new Schema({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  dietChartId: { type: Schema.Types.ObjectId, ref: 'DietChart', required: true },
  deliveryStatus: { type: String, enum: ['Pending', 'Delivered'], default: 'Pending' },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'DeliveryPersonnel' },
  timestamp: { type: Date, default: Date.now },
});

export default model('MealBox', mealBoxSchema);