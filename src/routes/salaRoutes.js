import express from "express";
import { getAllSala,getSala,insertSala,editSala } from "../controllers/salaController.js";

const router = express.Router();

router.get("/",getAllSala);
router.get("/:id",getSala);
router.post("/",insertSala);
router.put("/:id",editSala);

export default router;