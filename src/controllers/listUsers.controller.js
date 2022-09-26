import listUsersService from "../services/listUsers.services";

const listUsersController = (req, res) => {
  try {
    const { uuid } = req.body;
    const users = listUsersService(uuid);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export default listUsersController;
