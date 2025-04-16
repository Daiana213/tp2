import React from "react";

export default function PanelAvanzado({
  longitud,
  setLongitud,
  incluirMinusculas,
  setIncluirMinusculas,
  incluirMayusculas,
  setIncluirMayusculas,
  incluirNumeros,
  setIncluirNumeros,
  incluirEspeciales,
  setIncluirEspeciales,
}) {
  return (
    <div className="panel-avanzado">
      <h3>Opciones Avanzadas</h3>
      <div className="opcion">
        <label htmlFor="longitud">Longitud:</label>
        <input
          type="number"
          id="longitud"
          value={longitud}
          onChange={(e) => setLongitud(parseInt(e.target.value, 10))}
          min="1"
          max="128"
        />
      </div>
      <div className="opcion-checkbox">
        <label>Incluir minúsculas:</label>
        <input
          type="checkbox"
          checked={incluirMinusculas}
          onChange={(e) => setIncluirMinusculas(e.target.checked)}
        />
      </div>
      <div className="opcion-checkbox">
        <label>Incluir mayúsculas:</label>
        <input
          type="checkbox"
          checked={incluirMayusculas}
          onChange={(e) => setIncluirMayusculas(e.target.checked)}
        />
      </div>
      <div className="opcion-checkbox">
        <label>Incluir números:</label>
        <input
          type="checkbox"
          checked={incluirNumeros}
          onChange={(e) => setIncluirNumeros(e.target.checked)}
        />
      </div>
      <div className="opcion-checkbox">
        <label>Incluir especiales:</label>
        <input
          type="checkbox"
          checked={incluirEspeciales}
          onChange={(e) => setIncluirEspeciales(e.target.checked)}
        />
      </div>
    </div>
  );
}