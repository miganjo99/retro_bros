import { deleteItem } from "../api/items";
import { useState } from "react";
import UpdateForm from "./collection/UpdateForm";

export default function RetroCard({ item }) {
  const [edit, setEdit] = useState(false);

  const handleDelete = async () => {
    if (confirm("¿Eliminar este elemento?")) {
      await deleteItem(item._id);
      window.location.reload();
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow flex flex-col h-[350px]">

      {edit && <UpdateForm item={item} onClose={() => setEdit(false)} />}

      <div className="w-full h-[180px] overflow-hidden rounded">
        <img src={item.image} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-purple-300 font-semibold mt-3 text-sm">{item.name}</h3>

      <div className="flex justify-between mt-auto pt-4">
        <button
          onClick={() => setEdit(true)}
          className="text-blue-400 hover:text-blue-300 text-xs"
        >
          ✏ Editar
        </button>

        <button
          onClick={handleDelete}
          className="text-red-400 hover:text-red-300 text-xs"
        >
          🗑 Eliminar
        </button>
      </div>
    </div>
  );
}

