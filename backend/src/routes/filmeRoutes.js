import express from "express";
import { 
  getAllFilmes, 
  getFilme, 
  insertFilme, 
  editFilme, 
  deleteFilme 
} from "../controllers/filmeController.js";

import validateMovie from "../middlewares/validateMovie.js";

const router = express.Router();

router.get("/", getAllFilmes);
router.get("/:id", getFilme);

router.post("/", validateMovie, insertFilme);
router.put("/:id", validateMovie, editFilme);

router.delete("/:id", deleteFilme);

export default router;