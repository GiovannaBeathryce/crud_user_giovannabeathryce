import users from "../database";
import updateUserService from "../services/updateUser.services";

const updateUserController = (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;

    const updatedUser = updateUserService(id, user);

    return res.status(201).json({ updatedUser });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export default updateUserController;
