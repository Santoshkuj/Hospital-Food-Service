import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs'
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Manager', 'Pantry', 'Delivery'], required: true },
});

// Password hashing before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Password comparison
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default model('User', userSchema);