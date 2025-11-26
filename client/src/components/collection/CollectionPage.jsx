import { useState } from "react";
import ConsoleCollection from "./ConsoleCollection";
import GameCollection from "./GameCollection";
import CreateForm from "./CreateForm";
import Filters from "./Filters";

export default function CollectionPage({ items }) {
  const [filters, setFilters] = useState({
    type: "",
    year: "",
    manufacturer: "",
    genre: "",
    platform: ""
  });

  const [showCreate, setShowCreate] = useState(false);

  const filtered = items.filter((item) => {
    const matchesType =
      !filters.type || item.type === filters.type;

    const matchesYear =
      !filters.year || item.year?.toString() === filters.year;

    const matchesManufacturer =
      !filters.manufacturer || item.manufacturer === filters.manufacturer;

    const matchesGenre =
      !filters.genre || item.genre === filters.genre;

    const matchesPlatform =
      !filters.platform ||
      (Array.isArray(item.platforms) &&
        item.platforms.includes(filters.platform));

    return (
      matchesType &&
      matchesYear &&
      matchesManufacturer &&
      matchesGenre &&
      matchesPlatform
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">
        Colección Retro
      </h1>
      <button onClick={() => setShowCreate(true)} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl mb-6">➕ Añadir elemento</button>
      {showCreate && <CreateForm onClose={() => setShowCreate(false)} />}


      <Filters filters={filters} setFilters={setFilters} items={items} />

      <h2 className="text-2xl font-bold text-purple-400 mb-4">Consolas</h2>
      <ConsoleCollection items={filtered.filter(i => i.type === "console")} />

      <h2 className="text-2xl font-bold text-purple-400 mt-10 mb-4">Juegos</h2>
      <GameCollection items={filtered.filter(i => i.type === "game")} />
    </div>
  );
}
