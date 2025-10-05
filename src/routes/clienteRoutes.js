import express from "express";
import { getAllClientes, getCliente, insertCliente, editCliente, deleteCliente } from "../controllers/clienteController.js";

const router = express.Router();

router.get("/", getAllClientes);
router.get("/:id", getCliente);
router.post("/", insertCliente);
router.put("/:id", editCliente);
router.delete("/:id", deleteCliente);

export default router;
