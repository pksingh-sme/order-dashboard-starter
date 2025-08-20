import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <header className="p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Order Dashboard</h1>
        <button
          className="px-3 py-1 rounded border"
          onClick={() => setDark(!dark)}
        >
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </header>
      <main className="p-6">
        <p>🚀 Starter Dashboard - Replace with your implementation</p>
      </main>
    </div>
  );
}

export default App;
