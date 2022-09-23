import searchUserService from "../services/searchUser.services";

const searchUserController = (req, res) => {
  try {
    const id = req.params.uuid;
    const user = searchUserService(id);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default searchUserController;
