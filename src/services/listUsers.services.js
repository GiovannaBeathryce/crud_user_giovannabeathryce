import users from "../database";

const listUsersService = (uuid) => {
  const user = users.find((user) => user.uuid === uuid);

  if (user.isAdm === false) {
    throw new Error("Unauthorized");
  }

  return users;
};

export default listUsersService;
