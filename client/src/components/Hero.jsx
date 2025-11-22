export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 text-center">
      <h2 className="text-4xl font-bold font-mono text-purple-400">Bienvenido a RetroBros</h2>
      <p className="mt-4 text-gray-300 max-w-xl mx-auto">
        Descubre consolas, juegos y accesorios clásicos, todo en un solo lugar.
      </p>
      <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded font-semibold">
        Explorar Colección
      </button>
    </section>
  );
}