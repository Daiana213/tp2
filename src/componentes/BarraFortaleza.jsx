import React from "react";

export default function BarraFortaleza({ fortaleza, contrasena }) {
  const colores = ["rojo", "naranja", "amarillo", "verde-claro", "verde"];
  const textos = [
    "Muy insegura",
    "Poco segura",
    "Aceptable",
    "Segura",
    "Muy segura",
  ];

  const requisitos = [
    { texto: "Al menos 8 caracteres", cumple: contrasena.length >= 8 },
    { texto: "Al menos 1 letra mayúscula", cumple: /[A-Z]/.test(contrasena) },
    { texto: "Al menos 1 letra minúscula", cumple: /[a-z]/.test(contrasena) },
    { texto: "Al menos 1 número", cumple: /[0-9]/.test(contrasena) },
    { texto: "Al menos 1 carácter especial", cumple: /[!@#$%^&*().]/.test(contrasena) },
  ];

  return (
    <>
      <div className="barra-fortaleza-contenedor">
        <div
          className={`barra-fortaleza-progreso barra-fortaleza-${colores[fortaleza]}`}
          style={{ width: `${(fortaleza / 4) * 100}%` }}
        ></div>
      </div>
      <p className="barra-fortaleza-texto">{textos[fortaleza]}</p>

      <ul className="requisitos-lista">
        {requisitos.map((req, index) => (
          <li
            key={index}
            className={`requisito-item ${
              req.cumple ? "requisito-cumplido" : "requisito-pendiente"
            }`}
          >
            {req.texto}
          </li>
        ))}
      </ul>
    </>
  );
}