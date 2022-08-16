import express from "express";
import { router as projectsRoutes } from "./routes/projects.routes.js";
import { router as tasksRoutes } from "./routes/tasks.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;
