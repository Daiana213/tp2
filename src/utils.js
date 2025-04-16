export function generar_contrasena(
    longitud = 12,
    incluirMinusculas = true,
    incluirMayusculas = true,
    incluirNumeros = true,
    incluirEspeciales = false
  ) {
    let caracteres = "";
    if (incluirMinusculas) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (incluirMayusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirNumeros) caracteres += "0123456789";
    if (incluirEspeciales) caracteres += "!@#$%^&*()_+=-`~[]\{}|;':\",./<>?";
  
    let contrasena = "";
    if (caracteres.length === 0) return contrasena;
  
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres.charAt(indice);
    }
    return contrasena;
  }
  
  export function obtener_fortaleza_contrasena(contrasena) {
    let fortaleza = 0;
    const requisitos = {
      longitudMinima: contrasena.length >= 8,
      tieneMinusculas: /[a-z]/.test(contrasena),
      tieneMayusculas: /[A-Z]/.test(contrasena),
      tieneNumeros: /[0-9]/.test(contrasena),
      tieneEspeciales: /[!@#$%^&*()_+=-`~[\]\\{};':",./<>?]/.test(contrasena),
    };
  
    for (const requisito in requisitos) {
      if (requisitos[requisito]) {
        fortaleza++;
      }
    }
  
    if (contrasena.length >= 12) fortaleza++; // Bonus por longitud mayor
  
    return fortaleza;
  }