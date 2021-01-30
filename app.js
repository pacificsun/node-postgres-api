import express, { json } from "express";
import morgan from "morgan";

// Importing Routes
import projectRoutes from "./src/routes/projects";
import taskRoutes from "./src/routes/projects";

// Initialization
const app = express();

// middleware

app.use(morgan("dev"));
app.use(json);

// routes use

app.use("api/projects", projectRoutes);
app.use("api/tasks", taskRoutes);

app.listen(3000, () => console.log("running"));
