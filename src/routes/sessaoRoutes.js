import express from "express";
import { getAllSessao, getSessao, insertSessao, editSessao } from "../controllers/sessaoController.js";

const router = express.Router();

router.get("/", getAllSessao);
router.get("/:id", getSessao);
router.post("/", insertSessao);
router.put("/:id", editSessao);

export default router;
