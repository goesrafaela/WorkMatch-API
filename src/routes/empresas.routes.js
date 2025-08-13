import { Router } from "express";
import * as empresasController from "../controllers/empresas.controller.js";

const router = Router();

router.get("/", empresasController.listar);
router.post("/", empresasController.cadastrar);
router.delete("/:id", empresasController.excluir);

export default router;
