import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bycrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bycrypt.hash(password, 10);

  const datecreated = new Date();

  const newUser = {
    email,
    name,
    uuid: uuidv4(),
    isAdm,
    createdOn: datecreated,
    updatedOn: datecreated,
  };

  users.push({
    email,
    name,
    uuid: uuidv4(),
    isAdm,
    createdOn: datecreated,
    updatedOn: datecreated,
  });

  return newUser;
};

export default createUserService;
