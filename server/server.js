import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import itemsRoutes from "./routes/items.js";

dotenv.config();
const app = express();



// Middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/items", itemsRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
