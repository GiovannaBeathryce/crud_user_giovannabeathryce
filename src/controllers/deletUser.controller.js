import deleteUserService from "../services/deletUser.services";

const deleteUserController = (req, res) => {
  try {
    const id = req.params.uuid;
    const deletedUser = deleteUserService(id);
    return res.json(deletedUser);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteUserController;
