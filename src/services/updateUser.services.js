import users from "../database";

const updateUserService = (id, user) => {
  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex.isAdm === true) {
    users = { ...users, ...user };

    return users;
  }

  if (userIndex === -1) {
    throw new Error("Users not found");
  }

  users[userIndex] = { ...users[userIndex], ...user };

  return users[userIndex];
};

export default updateUserService;
