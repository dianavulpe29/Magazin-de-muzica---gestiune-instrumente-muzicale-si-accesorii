import ProdusList from "./components/ProdusList.jsx";

const produse = [
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

export default function App() {
  const active = produse.filter((p) => p.inStoc).length;

  return (
    <>
      <header className="app-header">
        <h1>Zeedo Shop Inventory</h1>
        <p>Gestiunea stocului de instrumente muzicale și accesorii profesionale.</p>
        <p className="app-count">
          {produse.length} produse în evidență, dintre care {active} în stoc
        </p>
      </header>

      <main className="container">
        {/* Formularul va reveni activ în Etapa 7 */}
        <section className="panel">
          <h2>Inventar produse</h2>
          <ProdusList produse={produse} />
        </section>
      </main>

      <footer className="app-footer">
        Proiect Tehnologii Web &copy; 2026 - Zeedo Shop
      </footer>
    </>
  );
}