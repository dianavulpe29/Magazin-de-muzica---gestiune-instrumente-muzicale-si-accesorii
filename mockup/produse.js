// --- 1. Datele inițiale și constantele permise ---
const DEPARTAMENTE = [
  "Instrumente cu corzi",
  "Clape & Sintetizatoare",
  "Accesorii & Audio",
];

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

// --- 2. Funcții de citire și căutare ---

// Returnează un array cu titlurile produselor
function listeazaTitluri(lista) {
  return lista.map((p) => p.titlu);
}

// Numără elementele active (cele aflate în stoc: inStoc === true)
function numaraActive(lista) {
  return lista.filter((p) => p.inStoc).length;
}

// Căutare case-insensitive după titlu
function cautaDupaTitlu(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((p) => p.titlu.toLowerCase().includes(textCautat));
}

// --- 3. Funcții de adăugare și generare ID ---

// Calculează următorul id unic pe baza maximului existent (reduce)
function nextId(lista) {
  return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

// Adaugă un produs nou validat, fără a modifica array-ul inițial
function adaugaProdus(lista, titlu, departament = "Accesorii & Audio") {
  const titluCurat = (titlu || "").trim();

  // Validare titlu
  if (!titluCurat) {
    console.warn("Eroare validare: Titlul produsului nu poate fi gol!");
    return lista;
  }

  // Validare departament din lista fixă
  if (!DEPARTAMENTE.includes(departament)) {
    console.warn(
      `Eroare validare: Departamentul "${departament}" este invalid! Valori permise: ${DEPARTAMENTE.join(", ")}`
    );
    return lista;
  }

  const produsNou = {
    id: nextId(lista),
    titlu: titluCurat,
    inStoc: true,
    departament: departament,
  };

  return [...lista, produsNou];
}

// --- 4. Funcții de modificare și ștergere ---

// Comută starea produsului (în stoc / epuizat) pentru un id dat
function comutaStoc(lista, id) {
  return lista.map((p) => (p.id === id ? { ...p, inStoc: !p.inStoc } : p));
}

// Șterge un produs după id
function stergeProdus(lista, id) {
  return lista.filter((p) => p.id !== id);
}

// --- 5. Rularea testelor în consolă (grupate pe secțiuni) ---

console.log("--- Citire ---");
console.log("Produse înregistrate:", listeazaTitluri(produse).join(", "));
console.log("Produse în stoc (active):", numaraActive(produse));
console.log(
  "Căutare 'fender':",
  listeazaTitluri(cautaDupaTitlu(produse, "fender")).join(", ")
);

console.log("--- Adăugare ---");
let listaActualizata = adaugaProdus(
  produse,
  "Microfon Shure SM7B",
  "Accesorii & Audio"
);
console.log("Lista nouă:", listaActualizata.length, "produse");
console.log("Originalul a rămas cu:", produse.length, "produse");

console.log("--- Modificare și ștergere ---");
// Comutăm starea produsului 1 (devine indisponibil)
listaActualizata = comutaStoc(listaActualizata, 1);
console.log("După epuizarea stocului pentru ID 1, produse în stoc:", numaraActive(listaActualizata));

// Ștergem produsul cu ID 3
listaActualizata = stergeProdus(listaActualizata, 3);
console.log("După ștergerea ID 3:", listeazaTitluri(listaActualizata).join(", "));

console.log("--- Validare ---");
adaugaProdus(listaActualizata, "   "); // eroare titlu gol
adaugaProdus(listaActualizata, "Pian Digital Yamaha", "Departament Inexistent"); // eroare departament invalid