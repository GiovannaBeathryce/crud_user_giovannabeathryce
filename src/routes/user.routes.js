import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import searchUserController from "../controllers/searchUser.controller";
import deleteUserController from "../controllers/deletUser.controller";
import userLoginController from "../controllers/userLogin.conttroller";
import verifyEmailAvailabilityMiddlewares from "../middlewares/verifyEmailAvailability.middlewares";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyAdmAuthMiddleware from "../middlewares/verifyAdmAuth.middleware";

const userRoutes = Router();

userRoutes.post("", verifyEmailAvailabilityMiddlewares, createUserController);
userRoutes.get("", verifyAuthTokenMiddleware, listUsersController);
userRoutes.get("/profile", verifyAuthTokenMiddleware, searchUserController);
userRoutes.patch("/:id", verifyAuthTokenMiddleware, updateUserController);
userRoutes.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

export default userRoutes;
