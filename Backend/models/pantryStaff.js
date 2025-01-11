import { Schema, model } from 'mongoose';

const pantryStaffSchema = new Schema({
  name: String,
  contactInfo: String,
  location: String,
});

export default model('PantryStaff', pantryStaffSchema);