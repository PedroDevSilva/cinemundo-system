import express from "express";
import { getAllIngressos, getIngressos, insertIngresso, editIngresso, deleteIngresso } from "../controllers/ingressoController.js";

const router = express.Router();

router.get("/", getAllIngressos);
router.get("/:id", getIngressos);
router.post("/", insertIngresso);
router.put("/:id", editIngresso);
router.delete("/:id", deleteIngresso);

export default router;