import { Router } from "express";

const router = Router();

import { createProject } from "../controllers/project.controller.js";

// /api/projects/
router.post("/", createProject);

export default router;
