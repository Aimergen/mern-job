import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import { notFound, handleError } from "./middlewares/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 8080;
const MONGODB_CONNECTION_STRING = process.env.MONGO_DB_URL;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.json("Server is READY"));

app.use(notFound);
app.use(handleError);

app.listen(port, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(console.log("Database successfully connected"))
    .catch(error => console.error(error));

  console.log(
    `iSHop E-Commerce application is running on http://localhost:${port}`
  );
});
