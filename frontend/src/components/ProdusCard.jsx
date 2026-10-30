const CLASE_DEPARTAMENT = {
  "Instrumente cu corzi": "badge-corzi",
  "Clape & Sintetizatoare": "badge-clape",
  "Accesorii & Audio": "badge-accesorii",
};

export default function ProdusCard({ produs, onToggle, onDelete }) {
  const clasaBadge = CLASE_DEPARTAMENT[produs.departament] || "badge-accesorii";

  return (
    <li className={produs.inStoc ? "item-card" : "item-card done"}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={produs.inStoc}
          onChange={() => onToggle(produs.id)}
        />
        <div className="card-details">
          <h3>{produs.titlu}</h3>
          <span className={`badge ${clasaBadge}`}>{produs.departament}</span>
        </div>
      </label>

      <div className="card-actions">
        <span className="status">
          {produs.inStoc ? "În stoc" : "Indisponibil"}
        </span>
        <button
          type="button"
          className="btn-danger"
          onClick={() => onDelete(produs.id)}
          aria-label={`Șterge ${produs.titlu}`}
        >
          Șterge
        </button>
      </div>
    </li>
  );
}