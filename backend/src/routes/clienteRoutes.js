import express from "express";
import { 
  getAllClientes, 
  getCliente, 
  insertCliente, 
  editCliente, 
  deleteCliente 
} from "../controllers/clienteController.js";

import validateUser from "../middlewares/validateUser.js";

const router = express.Router();

router.get("/", getAllClientes);
router.get("/:id", getCliente);

router.post("/", validateUser, insertCliente);
router.put("/:id", validateUser, editCliente);

router.delete("/:id", deleteCliente);

export default router;