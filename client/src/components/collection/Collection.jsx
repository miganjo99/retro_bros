import { useState, useMemo } from "react";
import Filters from "./Filters";
import CollectionList from "./CollectionList";

export default function Collection({ items = [] }) {
  const [filters, setFilters] = useState({
    type: "",
    year: "",
    name: "",
    manufacturer: "",
    genre: "",
  });

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return (
        (!filters.type || item.type === filters.type) &&
        (!filters.name || item.name === filters.name) &&
        (!filters.year || item.year === Number(filters.year)) &&
        (!filters.manufacturer || item.manufacturer === filters.manufacturer) &&
        (!filters.genre || item.genre === filters.genre)
      );
    });
  }, [items, filters]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">
        Colección Retro
      </h1>

      <Filters filters={filters} setFilters={setFilters} items={items} />

      <CollectionList items={filteredItems} />
    </div>
  );
}
