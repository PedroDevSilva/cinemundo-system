import express from "express";
import { getAllAssento,getAssento,insertAssento,editAssento } from "../controllers/assentoController.js";

const router = express.Router();

router.get("/",getAllAssento);
router.get("/:id",getAssento);
router.post("/",insertAssento);
router.put("/:id",editAssento);

export default router;