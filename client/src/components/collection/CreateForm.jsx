import { useState } from "react";
import { createItem } from "../../api/items";

export default function CreateForm({ onClose }) {
  const [form, setForm] = useState({
    type: "",
    name: "",
    year: "",
    manufacturer: "",
    genre: "",
    console: "",
    platforms: [],
    image: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem(form);
    window.location.reload();
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-xl border border-purple-700">
      <h2 className="text-xl text-purple-400 mb-4">Crear nuevo elemento</h2>

      <form className="grid gap-3" onSubmit={handleSubmit}>
        
        <select
          value={form.type}
          onChange={(e) => setForm({...form, type: e.target.value})}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="">Tipo...</option>
          <option value="console">Consola</option>
          <option value="game">Juego</option>
        </select>

        <input
          type="text"
          placeholder="Nombre"
          className="bg-gray-800 text-white p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Año"
          className="bg-gray-800 text-white p-2 rounded"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
        />

        {form.type === "console" && (
          <input
            type="text"
            placeholder="Fabricante"
            className="bg-gray-800 text-white p-2 rounded"
            value={form.manufacturer}
            onChange={(e) => setForm({ ...form, manufacturer: e.target.value })}
          />
        )}

        {form.type === "game" && (
          <>
            <input
              type="text"
              placeholder="Género"
              className="bg-gray-800 text-white p-2 rounded"
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
            />

            <input
              type="text"
              placeholder="Consola principal"
              className="bg-gray-800 text-white p-2 rounded"
              value={form.console}
              onChange={(e) => setForm({ ...form, console: e.target.value })}
            />

            <input
              type="text"
              placeholder="Plataformas (separadas por coma)"
              className="bg-gray-800 text-white p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, platforms: e.target.value.split(",") })
              }
            />
          </>
        )}

        <input
          type="text"
          placeholder="URL imagen"
          className="bg-gray-800 text-white p-2 rounded"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded mt-2">
          Crear
        </button>

        <button
          type="button"
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
