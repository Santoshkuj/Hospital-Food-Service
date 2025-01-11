import User from './models/user.js';
import bcrypt from 'bcryptjs'
// Test credentials
const users = [
  {
    name: 'Manager',
    email: 'hospital_manager@xyz.com',
    password: 'Password@2025',
    role: 'Manager',
  },
  {
    name: 'Pantry Staff',
    email: 'hospital_pantry@xyz.com',
    password: 'Password@2025',
    role: 'Pantry',
  },
  {
    name: 'Delivery Personnel',
    email: 'hospital_delivery@xyz.com',
    password: 'Password@2025',
    role: 'Delivery',
  },
];

const seedUsers = async () => {
  try {
    const existingUsers = await User.find();
    if (existingUsers.length > 0) {
      console.log('Users already seeded!');
      return;
    }

    const hashedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword };
      })
    );

    await User.insertMany(hashedUsers);
    console.log('Test users seeded successfully');
  } catch (error) {
    console.error('Error seeding test users:', error);
  }
};

export default seedUsers