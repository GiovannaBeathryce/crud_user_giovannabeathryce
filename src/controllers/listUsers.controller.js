import listUsersService from "../services/listUsers.services";

const listUsersController = (req, res) => {
  const users = listUsersService();

  return res.status.json(users);
};

export default listUsersController;
