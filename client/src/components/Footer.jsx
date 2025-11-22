export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto text-center py-6 text-sm">
        <p className="text-gray-200 font-mono">RetroBros © {new Date().getFullYear()}</p>
        <p>Tu colección de consolas y juegos vintage, modernizada.</p>
      </div>
    </footer>
  );
}