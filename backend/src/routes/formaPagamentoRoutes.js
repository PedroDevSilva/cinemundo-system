import express from "express";
import { getAllFormaPagamento, getFormasPagamento, insertFormaPagamento } from "../controllers/formaPagamentoController.js";

const router = express.Router();

router.get("/", getAllFormaPagamento);
router.get("/:id", getFormasPagamento);
router.post("/", insertFormaPagamento);

export default router;
 