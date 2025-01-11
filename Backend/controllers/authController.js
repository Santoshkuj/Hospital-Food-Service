import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const cookieOption ={
  HttpOnly:true,
  secure:true,
  maxAge: 24*60*60*1000
}

// Register User optional implementation
export async function register(req, res) {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Login User
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success:false,
        message: 'Provide all details'
      })
    }

    const user = await User.findOne({ email });
    
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid email or password' 
      });
    }
    user.password = undefined
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.cookie(`${user.role}`,token,cookieOption)

    res.status(200).json({
      success: true,
      user,
      role: user.role,
      message : 'LoggedIn successfull'
     });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get Current User
export async function getCurrentUser(req, res) {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}