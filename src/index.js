const path = require("node:path");
const colors = require("picocolors");

const { leerJSON, escribirTexto } = require("./archivos");
const { crearCatalogo } = require("./juegos");

const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");

async function main() {
  try {
    const juegos = await leerJSON(rutaDatos);
    const catalogo = crearCatalogo(juegos);

    await escribirTexto(rutaSalida, catalogo);

    console.log(catalogo);
    console.log(colors.green("✔ Catálogo generado correctamente."));
    console.log(colors.cyan(`Archivo guardado en: ${rutaSalida}`));
  } catch (error) {
    console.log(colors.red("✖ Error al generar el catálogo."));
    console.log(colors.red(error.message));
    process.exitCode = 1;
  }
}

main();