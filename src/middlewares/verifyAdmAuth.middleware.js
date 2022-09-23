import users from "../database";

const verifyAdmAuthMiddleware = (req, res, next) => {
  const { user } = req.body;
  let token = req.headers.authorization;

  const userAdmin = user.isAdm;

  if (userAdmin === true && token) {
    next();
  }

  return res.status(401).json({ message: "Missing admin permissions" });
};

export default verifyAdmAuthMiddleware;
