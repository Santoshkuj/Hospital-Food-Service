import { Schema, model } from "mongoose";

const DietChartSchema = Schema({
  patientId: { type: Schema.Types.ObjectId, ref: "Patient" },
  morningMeal: String,
  eveningMeal: String,
  nightMeal: String,
  ingreDients: Array,
  specialInstructions: String,
}, { timestamps: true });

export default model("DietChart", DietChartSchema);