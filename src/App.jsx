import React, { useState } from "react";
import InputContrasena from "./componentes/InputContrasena";
import BarraFortaleza from "./componentes/BarraFortaleza";
import PanelAvanzado from "./componentes/PanelAvanzado";
import { obtener_fortaleza_contrasena, generar_contrasena } from "./utils";
import "./App.css";

export default function App() {
  const [contrasena, setContrasena] = useState("");
  const [contrasenaGenerada, setContrasenaGenerada] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [mostrarPanelAvanzado, setMostrarPanelAvanzado] = useState(false);
  const [longitud, setLongitud] = useState(12);
  const [incluirMinusculas, setIncluirMinusculas] = useState(true);
  const [incluirMayusculas, setIncluirMayusculas] = useState(true);
  const [incluirNumeros, setIncluirNumeros] = useState(true);
  const [incluirEspeciales, setIncluirEspeciales] = useState(false);
  const [mensajeCopiado, setMensajeCopiado] = useState(""); // Estado para el mensaje

  const fortaleza = obtener_fortaleza_contrasena(contrasena);

  const copiarAlPortapapeles = () => {
    navigator.clipboard
      .writeText(contrasenaGenerada)
      .then(() => {
        setMensajeCopiado("¡Contraseña copiada al portapapeles!"); // Mostrar mensaje
        setTimeout(() => setMensajeCopiado(""), 3000); // Ocultar mensaje después de 3 segundos
      })
      .catch(() => {
        setMensajeCopiado("Error al copiar la contraseña.");
        setTimeout(() => setMensajeCopiado(""), 3000);
      });
  };

  const generarNuevaContrasena = () => {
    const nuevaContrasena = generar_contrasena(
      longitud,
      incluirMinusculas,
      incluirMayusculas,
      incluirNumeros,
      incluirEspeciales
    );
    setContrasenaGenerada(nuevaContrasena);
  };

  return (
    <div className="contenedor-principal">
      <div className="contenedor-formulario">
        <h2 className="titulo-formulario">Comprobador de Contraseña</h2>
        <InputContrasena
          contrasena={contrasena}
          setContrasena={setContrasena}
          mostrar={mostrarContrasena}
          setMostrar={setMostrarContrasena}
        />
        <BarraFortaleza fortaleza={fortaleza} contrasena={contrasena} />
        <button
          className="boton-panel-avanzado"
          onClick={() => setMostrarPanelAvanzado(!mostrarPanelAvanzado)}
        >
          {mostrarPanelAvanzado ? "Ocultar Opciones" : "Mostrar Opciones Avanzadas"}
        </button>
        {mostrarPanelAvanzado && (
          <>
            <PanelAvanzado
              longitud={longitud}
              setLongitud={setLongitud}
              incluirMinusculas={incluirMinusculas}
              setIncluirMinusculas={setIncluirMinusculas}
              incluirMayusculas={incluirMayusculas}
              setIncluirMayusculas={setIncluirMayusculas}
              incluirNumeros={incluirNumeros}
              setIncluirNumeros={setIncluirNumeros}
              incluirEspeciales={incluirEspeciales}
              setIncluirEspeciales={setIncluirEspeciales}
            />
            <div className="generador-contrasena-container">
              <button onClick={generarNuevaContrasena} className="generar-contrasena-boton">
                Generar Contraseña
              </button>
              {contrasenaGenerada && (
                <div className="contrasena-generada-div">
                  <span>{contrasenaGenerada}</span>
                  <button className="boton-copiar" onClick={copiarAlPortapapeles}>
                    Copiar Contraseña
                  </button>
                  {mensajeCopiado && (
                    <p className="mensaje-copiado">{mensajeCopiado}</p>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
