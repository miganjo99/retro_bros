export default function RetroCard({ item }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-purple-300 font-semibold mt-3">{item.title}</h3>
      <p className="text-gray-300 text-sm mt-1">{item.description}</p>
      <span className="text-gray-400 text-xs mt-2 block">{item.year}</span>
    </div>
  );
}