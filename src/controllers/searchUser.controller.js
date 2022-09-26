import searchUserService from "../services/searchUser.services";

const searchUserController = (req, res) => {
  try {
    const { uuid } = req.body;
    const user = searchUserService(uuid);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default searchUserController;
