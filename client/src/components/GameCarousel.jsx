import RetroCard from "./RetroCard";

export default function GameCarousel({ items }) {

  const games = items
    .filter(item => item.type === "game")
    .slice(0, 10); 

  if (!games.length) {
    return <p className="text-center text-gray-400">No hay juegos disponibles.</p>;
  }

  return (
    <div className="relative w-full">
      
      <h2 className="text-2xl font-bold text-purple-400 mb-4">Juegos destacadas</h2>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory console-carousel-scrollbar">
        {games.map((gameItem) => (
          <div
            key={gameItem._id}
            className="snap-start min-w-[250px] max-w-[250px] flex-shrink-0"
          >
            <RetroCard item={gameItem} />
          </div>
        ))}
      </div>

    </div>
  );
}
