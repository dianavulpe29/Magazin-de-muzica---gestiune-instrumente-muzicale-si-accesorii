import { useState } from "react";
import ProdusList from "./components/ProdusList.jsx";

const PRODUSE_INITIALE = [
  {
    id: 1,
    titlu: "Fender Player Stratocaster",
    inStoc: true,
    departament: "Instrumente cu corzi",
  },
  {
    id: 2,
    titlu: "Sintetizator Korg Minilogue XD",
    inStoc: false,
    departament: "Clape & Sintetizatoare",
  },
  {
    id: 3,
    titlu: "Căști Audio-Technica ATH-M50x",
    inStoc: true,
    departament: "Accesorii & Audio",
  },
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [produse, setProduse] = useState(PRODUSE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setProduse((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inStoc: !p.inStoc } : p))
    );
  }

  function handleDelete(id) {
    setProduse((prev) => prev.filter((p) => p.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = produse.filter((p) => p.inStoc).length;

  return (
    <>
      <header className="app-header">
        <button
          type="button"
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>Zeedo Shop Inventory</h1>
        <p>Gestiunea stocului de instrumente muzicale și accesorii profesionale.</p>
        <p className="app-count">
          {produse.length} produse în evidență, dintre care {active} în stoc
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Inventar produse</h2>
          <ProdusList
            produse={produse}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <footer className="app-footer">
        Proiect Tehnologii Web &copy; 2026 - Zeedo Shop
      </footer>
    </>
  );
}