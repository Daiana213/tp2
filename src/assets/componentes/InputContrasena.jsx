import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={mostrar ? faEyeSlash : faEye} />
      </button>
  </div>
);
}