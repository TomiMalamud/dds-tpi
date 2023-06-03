# Desarrollo Fullstack: Trabajo Práctico Integrador

- UTN FRC - DDS - 2023
- Grupo 11 3K1
- Tomás Malamud 89772, Martín Boris 90236, Manuel Verger 86411, Nicolas Ojea Stefani 90175, Ignacio Barrionuevo 85515.

## Para Correr Localmente

Primer paso y más importante: Abrir el proyecto en la carpeta Trabajo Práctico Integrador. Si se clona directamente el proyecto en VSCode e inmediatemente se corren los comandos, no va a funcionar. Esto es porque "grupo-11" no es el directorio raíz del proyecto.

Instalar node-modules
```bash
npm install
```

Iniciar el servidor
```bash
npm run dev
```

También se puede ejecutar jest usando el comando
```bash
npm run test
```

## Estructura del Proyecto

El proyecto se encuentra estructurado principalmente de la siguiente manera:

```bash
├── __tests__
│   └── jugadores.test.js
├── app
│   ├── layout.js
│   └── page.js
├── data
│   └── futbol.db
├── pages
│   ├── api
│   │   ├── jugadores
│   │   │   └── [id].js
│   │   └── jugadores.js
│   ├── futbol.js
│   └── mostrar-db.js
├── public
│   ├── next.svg
│   └── vercel.svg
├── sequelize-init.js
├── sqlite-init.mjs
```

## Descripción de los archivos

**jugadores.test.js.** Archivo que contiene test unitario para jugadores.

**jugadores.js.** Archivo que la Web API jugadores, que contiene todos los métodos HTTPS necesarios (GET, PUT, DELETE, POST) para la gestión del recurso "jugadores". Son las operaciones CRUD o ABMC.

**[id].js.** Archivo que contiene la Web API del detalle de un jugador con sus métodos HTTPS necesarios (GET, PUT, DELETE, POST).

**futbol.db.** Base de datos que contiene la información de los equipos de fútbol.

**futbol.js.** Archivo que contiene el renderizado de la información contenida en la base de datos.

**mostrar-db.js.** Contiene la función que luego es llamada por el archivo futbol.js para mostrar la información de la base de datos.

**sequelize-init.js.** Archivo que define los modelos de datos utilizados en la base de datos.

**sqlite-init.js.** Archivo que contiene la configuración de la base de datos. Crea la base de datos
