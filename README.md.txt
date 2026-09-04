# Trabajo Práctico 02 – Módulos, asincronía y NPM
# realizado por Chaves Jennifer.


## Descripción

Este proyecto consiste en una aplicación de consola desarrollada con Node.js. El programa lee un archivo JSON con un catálogo de juegos de mesa, transforma la información y genera un informe de texto de manera automática.

## Instalación

Instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución

Verificar que los archivos no tengan errores:

```bash
npm run check
```

Ejecutar el proyecto:

```bash
npm start
```

## Estructura del proyecto

* **datos/** contiene el archivo `juegos.json`.
* **src/archivos.js** realiza la lectura y escritura de archivos.
* **src/juegos.js** transforma los datos y crea el catálogo.
* **src/index.js** coordina toda la aplicación.
* **salida/** almacena el archivo generado automáticamente.

## Flujo asíncrono

La función principal utiliza `async` y `await` para esperar la lectura del archivo JSON y luego guardar el catálogo. Si ocurre algún error, `try/catch` lo captura y muestra un mensaje sin detener el programa de forma inesperada.

## Dependencias

Se utiliza la librería **picocolors** para mostrar mensajes de éxito y error con colores en la terminal.

## Conceptos

### ¿Qué responsabilidad tiene cada módulo?

Cada módulo cumple una tarea específica: uno trabaja con archivos, otro transforma los datos y el principal coordina la ejecución.

### ¿Qué diferencia existe entre exportar una función y ejecutarla?

Exportar una función permite utilizarla desde otro archivo. Ejecutarla significa llamar a esa función para que realice una acción.

### ¿Qué representa la promesa devuelta por fs.readFile?

Representa una operación de lectura que todavía no terminó. Cuando finaliza correctamente devuelve el contenido del archivo.

### ¿Por qué await se utiliza dentro de una función async?

Porque `await` espera el resultado de una promesa y solo puede utilizarse dentro de funciones declaradas como `async`.

### ¿Qué errores pueden llegar al catch de main?

Pueden llegar errores al leer el archivo JSON, al interpretar los datos o al escribir el archivo de salida.

### ¿Por qué se publican package.json y package-lock.json pero no node_modules?

Porque esos archivos describen las dependencias necesarias para reconstruir el proyecto, mientras que `node_modules` puede instalarse nuevamente con `npm install`.

### ¿Para qué se utiliza picocolors y por qué figura en dependencies?

Se utiliza para colorear mensajes en la consola y aparece en `dependencies` porque el proyecto la necesita para ejecutarse correctamente.
