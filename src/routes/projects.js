const Router = require("express/lib/router");

const router = Router();

const { createProject } = require("../controllers/project.controller");

// /api/projects/
router.post("/", createProject);

export default router;
