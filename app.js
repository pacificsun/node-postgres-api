import express, { json } from "express";
import morgan from "morgan";

// Importing Routes
import projectRoutes from "./src/routes/projects.js";
// import taskRoutes from "./src/routes/projects";

// Initialization
const app = express();

// middleware

app.use(morgan("dev"));
app.use(json);

// routes use

app.use("api/projects", projectRoutes);
// app.use("api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
