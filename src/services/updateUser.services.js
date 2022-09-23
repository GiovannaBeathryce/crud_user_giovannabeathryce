import users from "../database";

const updateUserService = (uuid, user) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    throw new Error("Users not found");
  }

  users[userIndex] = { ...users[userIndex], ...user };

  return users[userIndex];
};

export default updateUserService;
