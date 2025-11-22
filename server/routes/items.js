import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

// Obtener TODOS los items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find(); // obtiene todos los items
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los items" });
  }
});

// Crear item
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const item = await Item.create({ name });
    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el item" });
  }
});

// Eliminar item
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el item" });
  }
});

export default router;
