import RetroCard from "./RetroCard";

export default function GameList({ items }) {

  const games = items.filter(item => item.type === "game");

  if (!games.length) {
    return <p className="text-center text-gray-400">No hay juegos disponibles.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {games.map((game) => (
        <RetroCard key={game._id} item={game} />
      ))}
    </div>

  );
}
