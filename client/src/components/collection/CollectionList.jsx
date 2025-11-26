import RetroCard from "../RetroCard";

export default function CollectionList({ items }) {
  if (!items.length) {
    return (
      <p className="text-center text-gray-400 text-lg mt-6">
        No se encontraron resultados con los filtros seleccionados.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <RetroCard key={item._id} item={item} />
      ))}
    </div>
  );
}
