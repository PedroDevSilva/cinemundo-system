import express from "express";
import { getAllFilmes, getFilme, insertFilme, editFilme, deleteFilme } from "../controllers/filmeController.js";

const router = express.Router();

router.get("/", getAllFilmes);
router.get("/:id", getFilme);
router.post("/", insertFilme);
router.put("/:id", editFilme);
router.delete("/:id", deleteFilme);

export default router;