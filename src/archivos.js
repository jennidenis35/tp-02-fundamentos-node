const fs = require("node:fs/promises");
const path = require("node:path");

async function leerJSON(ruta) {
    const contenido = await fs.readFile(ruta, "utf8");
    return JSON.parse(contenido);
}

async function escribirTexto(ruta, texto) {
    await fs.mkdir(path.dirname(ruta), { recursive: true });
    await fs.writeFile(ruta, texto, "utf8");
}

module.exports = {
    leerJSON,
    escribirTexto
};