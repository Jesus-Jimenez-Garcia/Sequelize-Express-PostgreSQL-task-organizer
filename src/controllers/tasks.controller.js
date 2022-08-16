import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: {
        id,
      },
      attributes: ["id", "name", "projectId"],
    });
    res.json(task);
  } catch (error) {}
};

export const createTask = async (req, res) => {
  try {
    const { name, done, projectId, id } = req.body;
    const newTask = await Task.create({
      name,
      done,
      projectId,
      id,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    task.set(req.body);
    await task.save();
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      where: {
        id,
      },
    });

    if (!task) return res.status(404).json({ message: "Task does not exists" });

    res.json({ "Task delete": task });

    await Task.destroy({
      where: {
        id,
      },
    });

    res.status(204);
    res.end("deleted");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
