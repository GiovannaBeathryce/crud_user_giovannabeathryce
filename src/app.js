import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

const PORT = 3000;

app.listen(3000);

export default app;
