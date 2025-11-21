import express from "express";
import Item from "../models/Item.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware auth
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No autorizado" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
};

// Obtener items del usuario
router.get("/", auth, async (req, res) => {
  const items = await Item.find({ user: req.userId });
  res.json(items);
});

// Crear item
router.post("/", auth, async (req, res) => {
  const { name } = req.body;
  const item = await Item.create({ name, user: req.userId });
  res.status(201).json(item);
});

// Eliminar item
router.delete("/:id", auth, async (req, res) => {
  await Item.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ ok: true });
});

export default router;
