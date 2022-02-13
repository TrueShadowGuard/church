import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = req.user || {};
    req.user.role = data.role;
    next();
  } catch (e) {
    res.status(500).end();
  }
}
