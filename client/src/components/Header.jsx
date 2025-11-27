import logo from "../assets/logo.png";


export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo RetroBros" className="w-20 h-20" />

          <h1 className="text-l font-bold font-mono text-purple-300">RetroBros</h1>
        </div>
        <nav className="flex gap-6 text-gray-200 font-semibold">
          <a href="/" className="hover:text-purple-300 transition">Inicio</a>
          <a href="/collection" className="hover:text-purple-300 transition">Colección</a>           
          <a href="/about" className="hover:text-purple-300 transition">Sobre</a>
        </nav>
      </div>
    </header>
  );
}
