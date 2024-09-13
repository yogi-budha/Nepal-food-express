import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    try {
      const decoded = jwt.verify(token, 'yogesh');
      req.email = decoded.email;
      next();
    } catch (err) {
      return res.status(400).json({ message: 'Invalid token.' });
    }
  }


export default authMiddleware