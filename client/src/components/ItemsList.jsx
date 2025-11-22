import { useEffect, useState } from "react";

export default function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch(`${import.meta.env.VITE_API_URL}/api/items`)
     fetch("http://localhost:5000/api/items")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(item => (
        <div
          key={item._id}
          className="bg-white shadow rounded p-4 border border-gray-200"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />
          )}

          <h2 className="text-lg font-bold mt-2">{item.name}</h2>
          <p className="text-gray-600">{item.type.toUpperCase()}</p>
          {item.console && <p className="text-gray-500">Console: {item.console}</p>}
          <p className="text-gray-500">Year: {item.year}</p>
        </div>
      ))}
    </div>
  );
}
