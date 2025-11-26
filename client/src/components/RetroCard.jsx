export default function RetroCard({ item }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col">
      <div className="h-66 w-full overflow-hidden rounded"> {/* Contenedor con altura fija */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-purple-300 font-semibold mt-3">{item.name}</h3>
      <p className="text-gray-300 text-sm mt-1 line-clamp-2">{item.description}</p> {/* Limita líneas */}
      <span className="text-gray-400 text-xs mt-2 block">{item.year}</span>
    </div>
  );
}