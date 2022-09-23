import users from "../database";
import updateUserService from "../services/updateUser.services";

const updateUserController = (req, res) => {
  try {
    const { uuid } = req.params;
    const { user } = req.body;

    if (user.uuid === uuid || user.isAdm === true) {
      const updatedUser = updateUserService(id, user);

      return res.json(updatedUser);
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateUserController;
