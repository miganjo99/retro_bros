export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold font-mono text-purple-400">RetroBros</h1>
        <nav className="flex gap-6 text-gray-200 font-semibold">
          <a href="/" className="hover:text-purple-300 transition">Inicio</a>
          <a href="/items" className="hover:text-purple-300 transition">Colección</a>
          <a href="/about" className="hover:text-purple-300 transition">Sobre</a>
        </nav>
      </div>
    </header>
  );
}