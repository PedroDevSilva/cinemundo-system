import express from "express";
import { getAllGeneros, getGenero, insertGenero } from "../controllers/generoController.js";

const router = express.Router();

router.get("/", getAllGeneros);
router.get("/:id", getGenero);
router.post("/", insertGenero);

export default router;