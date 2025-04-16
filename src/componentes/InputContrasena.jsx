import React, { useState } from "react";

export default function InputContrasena({ contrasena, setContrasena, mostrar, setMostrar }) {
  return (
    <div className="input-contrasena-container">
      <input
        type={mostrar ? "text" : "password"}
        placeholder="Ingresa tu contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        className="input-contrasena-input"
      />
      <button
        onClick={() => setMostrar(!mostrar)}
        className="input-contrasena-toggle-button"
        aria-label={mostrar ? "Ocultar contraseña" : "Mostrar contraseña"}
      >
         <i id="toggleIcon" className="fas fa-eye"></i>
      </button>
  </div>
);
}