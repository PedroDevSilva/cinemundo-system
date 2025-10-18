import express from "express";
import { getAllPagamentos, getPagamentos, insertPagamento } from "../controllers/pagamentoController.js";

const router = express.Router();

router.get("/", getAllPagamentos);
router.get("/:id", getPagamentos);
router.post("/", insertPagamento);

export default router;
