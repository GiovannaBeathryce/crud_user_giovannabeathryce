import users from "../database";

const searchUserService = (uuid) => {
  const user = users.find((user) => user.uuid === uuid);

  if (!user) {
    throw new Error("Users not found");
  }

  return uuid;
};

export default searchUserService;
