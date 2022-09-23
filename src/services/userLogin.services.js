import users from "../database";
import jwt from "jsonwebtoken";
import * as bycrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    return "Invalid email or password";
  }

  const passwordMatch = bycrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Invalid email or password";
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};

export default userLoginService;
