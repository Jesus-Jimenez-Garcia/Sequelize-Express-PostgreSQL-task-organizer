import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} from "../controllers/tasks.controller.js";

export const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/:id", getTask);
