import userLoginService from "../services/userLogin.services";

const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userLoginService(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export default userLoginController;
