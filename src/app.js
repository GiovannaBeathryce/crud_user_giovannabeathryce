import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/session.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

const PORT = 3000;

app.listen(3000);

export default app;
