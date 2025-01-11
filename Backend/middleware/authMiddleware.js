import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const authMiddleware = (roles = []) => {
    return (req, res, next) => {
      const token = roles.map((role) => req.cookies[role]).find(Boolean);
      if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });
  
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
  
        // Role validation
        if (roles.length && !roles.includes(decoded.role)) {
          return res.status(403).json({ message: 'Access forbidden: Insufficient permissions.' });
        }
  
        next();
      } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
      }
    };
  };

export default authMiddleware;