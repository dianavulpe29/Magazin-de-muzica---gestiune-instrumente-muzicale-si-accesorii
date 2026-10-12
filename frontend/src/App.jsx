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
  // Calcul dinamic: câte produse sunt active (în stoc)
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
        <section className="panel">
          <h2>Inventar produse (JSON brut)</h2>
          {/* Temporar în Etapa 3: afișare text brut; componentele React vor fi create în Etapa 4 */}
          <pre>{JSON.stringify(produse, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}