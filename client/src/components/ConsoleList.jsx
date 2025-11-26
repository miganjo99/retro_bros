import RetroCard from "./RetroCard";

export default function ConsoleList({ items }) {
    
  const consoles = items.filter(item => item.type === "console");

  if (!consoles.length) {
    return <p className="text-center text-gray-400">No hay consolas disponibles.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {consoles.map((consoleItem) => (
        <RetroCard key={consoleItem._id} item={consoleItem} />
      ))}
    </div>
  );
}