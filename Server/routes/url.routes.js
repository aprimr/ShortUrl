import express from "express";
import { shortUrl } from "../controllers/url.controllers.js";

const router = express.Router();

//routes
router.post("/shorten", shortUrl);

export default router;
