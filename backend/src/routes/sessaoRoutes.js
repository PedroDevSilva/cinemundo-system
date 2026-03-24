import express from "express";
import { 
  getAllSessao, 
  getSessao, 
  insertSessao, 
  editSessao 
} from "../controllers/sessaoController.js";

import validateSession from "../middlewares/validateSession.js";

const router = express.Router();

router.get("/", getAllSessao);
router.get("/:id", getSessao);

router.post("/", validateSession, insertSessao);
router.put("/:id", validateSession, editSessao);

export default router;