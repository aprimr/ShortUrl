import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import urlRoutes from "./routes/url.routes.js";
import connectDB from "./config/DB.js";
import { getShortUrl } from "./controllers/url.controllers.js";

const app = express();
dotenv.config();

// ENV variables
const PORT = process.env.PORT;

//Middlewares
app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

//Routes
app.use("/api/url", urlRoutes);
app.get("/api/:shortId", getShortUrl);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started on PORT:" + PORT);
});
