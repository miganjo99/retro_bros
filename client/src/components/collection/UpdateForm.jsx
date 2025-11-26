import { useState } from "react";
import { updateItem } from "../../api/items";

export default function UpdateForm({ item, onClose }) {
  const [form, setForm] = useState(item);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(item._id, form);
    window.location.reload();
  };

  return (
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-gray-900 p-6 rounded-xl border border-purple-700 w-full max-w-md">
        
        <h2 className="text-purple-400 text-xl mb-4">Editar {item.name}</h2>

        <form className="grid gap-3" onSubmit={handleSubmit}>
          
          <input
            type="text"
            className="bg-gray-800 text-white p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="number"
            className="bg-gray-800 text-white p-2 rounded"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
          />

          {item.type === "console" && (
            <input
              type="text"
              className="bg-gray-800 text-white p-2 rounded"
              value={form.manufacturer}
              onChange={(e) =>
                setForm({ ...form, manufacturer: e.target.value })
              }
            />
          )}

          {item.type === "game" && (
            <>
              <input
                type="text"
                className="bg-gray-800 text-white p-2 rounded"
                value={form.genre}
                onChange={(e) => setForm({ ...form, genre: e.target.value })}
              />

              <input
                type="text"
                className="bg-gray-800 text-white p-2 rounded"
                value={form.console}
                onChange={(e) => setForm({ ...form, console: e.target.value })}
              />

              <input
                type="text"
                className="bg-gray-800 text-white p-2 rounded"
                value={form.platforms?.join(",")}
                onChange={(e) =>
                  setForm({ ...form, platforms: e.target.value.split(",") })
                }
              />
            </>
          )}

          <input
            type="text"
            className="bg-gray-800 text-white p-2 rounded"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
            Actualizar
          </button>

          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
        </form>

      </div>
    </div>
  );
}
