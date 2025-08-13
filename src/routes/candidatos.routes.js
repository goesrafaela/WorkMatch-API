import { Router } from "express";
import * as candidatosController from "../controllers/candidatos.controller.js";

const router = Router();

router.get("/", candidatosController.listar);
router.post("/", candidatosController.cadastrar);
router.delete("/:id", candidatosController.excluir);

export default router;
