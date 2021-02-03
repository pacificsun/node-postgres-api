const express = require("express");

const app = express();

const projectRoutes = require("./src/routes/projects");

app.use("/api/project", projectRoutes);

app.listen(5000, () => console.log("app is running "));
