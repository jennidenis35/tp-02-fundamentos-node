function crearCatalogo(juegos) {

    const lista = juegos.map((juego, index) => {

        const categorias = juego.categorias.join(", ");
        const estado = juego.disponible ? "Disponible" : "No disponible";

        return `
${index + 1}. ${juego.titulo}
Editorial y año: ${juego.editorial} (${juego.anio})
Participantes: ${juego.jugadoresMin} a ${juego.jugadoresMax}
Categorías: ${categorias}
Estado: ${estado}
`;
    }).join("\n-------------------------\n");

    return `


Cantidad de juegos: ${juegos.length}

${lista}
`;
}

module.exports = { crearCatalogo };