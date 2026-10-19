const CLASE_DEPARTAMENT = {
  "Instrumente cu corzi": "badge-corzi",
  "Clape & Sintetizatoare": "badge-clape",
  "Accesorii & Audio": "badge-accesorii",
};

export default function ProdusCard({ produs }) {
  const clasaBadge = CLASE_DEPARTAMENT[produs.departament] || "badge-accesorii";

  return (
    <li className={produs.inStoc ? "item-card" : "item-card done"}>
      <div className="card-details">
        <h3>{produs.titlu}</h3>
        <span className={`badge ${clasaBadge}`}>{produs.departament}</span>
      </div>
      <span className="status">
        {produs.inStoc ? "În stoc" : "Indisponibil"}
      </span>
    </li>
  );
}