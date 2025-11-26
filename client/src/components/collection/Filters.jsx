export default function Filters({ filters, setFilters, items }) {

  const unique = (field) =>
    [...new Set(
      items
        .flatMap(i => Array.isArray(i[field]) ? i[field] : i[field] ? [i[field]] : [])
    )];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 bg-gray-800 p-4 rounded-xl shadow-lg">

      {/* TYPE */}
      <select
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        className="bg-gray-700 text-white p-2 rounded-xl"
      >
        <option value="">Tipo</option>
        <option value="console">Consolas</option>
        <option value="game">Juegos</option>
      </select>

      {/* PLATFORM  */}
      <select
        value={filters.platform}
        onChange={(e) => setFilters({ ...filters, platform: e.target.value })}
        className="bg-gray-700 text-white p-2 rounded-xl"
      >
        <option value="">Plataforma</option>
        {unique("platforms").map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>

      {/* YEAR */}
      <select
        value={filters.year}
        onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        className="bg-gray-700 text-white p-2 rounded-xl"
      >
        <option value="">Año</option>
        {unique("year").sort((a, b) => a - b).map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>

      {/* MANUFACTURER */}
      <select
        value={filters.manufacturer}
        onChange={(e) =>
          setFilters({ ...filters, manufacturer: e.target.value })
        }
        className="bg-gray-700 text-white p-2 rounded-xl"
      >
        <option value="">Fabricante</option>
        {unique("manufacturer").map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>

      {/* GENRE */}
      <select
        value={filters.genre}
        onChange={(e) =>
          setFilters({ ...filters, genre: e.target.value })
        }
        className="bg-gray-700 text-white p-2 rounded-xl"
      >
        <option value="">Género</option>
        {unique("genre").map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
    </div>
  );
}
