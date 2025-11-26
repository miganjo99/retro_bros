import RetroCard from "../RetroCard";

export default function GameCollection({ items = [] }) {
  if (!items.length) {
    return <p className="text-gray-400">No hay juegos que coincidan.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((it) => (
        <RetroCard key={it._id ?? it.id} item={it} />
      ))}
    </div>
  );
}
