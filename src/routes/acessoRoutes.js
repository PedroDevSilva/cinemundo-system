import express from "express";
import { getAllAcessos, getAcesso, insertAcesso } from "../controllers/acessoController.js";

const router = express.Router();

router.get("/", getAllAcessos);
router.get("/:id", getAcesso);
router.post("/", insertAcesso);

export default router;
