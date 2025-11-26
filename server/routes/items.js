// server/routes/items.js
import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

// GET todos
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los items" });
  }
});

// POST crear (usa todo el body)
router.post("/", async (req, res) => {
  try {
    // opcional: validar mínimo que venga name
    if (!req.body.name) {
      return res.status(400).json({ error: "El nombre es obligatorio" });
    }

    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el item" });
  }
});

// PUT actualizar
router.put("/:id", async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Item no encontrado" });
    }
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el item" });
  }
});

// DELETE
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
