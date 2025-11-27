# Retro Bros

---

<p align="center">
  <img src="https://github.com/miganjo99/retro_bros/raw/main/public/logo.png" alt="Retro Bros Logo" width="150" />
</p>

<h1 align="center">Retro Bros</h1>

<p align="center">
  <a href="#descripción">Descripción</a> •
  <a href="#arquitectura">Arquitectura</a> •
  <a href="#tecnologías">Tecnologías</a> •
  <a href="#estructura-del-proyecto">Estructura del Proyecto</a> •
  <a href="#comandos-de-desarrollo">Comandos de Desarrollo</a> •
  <a href="#características-principales">Características</a> •
  <a href="#principios-de-diseño">Principios de Diseño</a> •
  <a href="#contacto">Contacto</a>
</p>

---

## Descripción

Retro Bros es una aplicación web **full-stack** para gestionar tu colección personal de videojuegos y consolas retro. Este proyecto es una plataforma de aprendizaje que implementa un sistema completo **CRUD** (Crear, Leer, Actualizar, Eliminar) junto con un sistema de autenticación segura y una interfaz responsiva y estilizada.

**Funciones principales:**  
- Navegar y visualizar juegos y consolas retro.  
- Crear, actualizar y eliminar elementos de la colección.  
- Filtrar y buscar en tiempo real a través de la colección.  
- Autenticación segura con JWT y contraseñas cifradas.  

---

## Arquitectura

| Componente           | Tecnología          | Ubicación       | Propósito                       |
| -------------------- | ------------------- | --------------- | ------------------------------ |
| Frontend Cliente     | React + Vite        | `client/`       | Interfaz de usuario            |
| Backend API          | Express + Node.js   | `server/`       | Lógica y acceso a datos        |
| Base de datos        | MongoDB Atlas       | Cloud (Atlas)   | Almacenamiento persistente      |

---

## Tecnologías

### Frontend

| Tecnología          | Versión | Propósito                |
|---------------------|---------|--------------------------|
| React               | 19.2.0  | Framework UI             |
| Vite                | 7.2.4   | Herramienta de construcción y servidor dev |
| Tailwind CSS        | 3.4.18  | Estilos utility-first    |
| React Router DOM    | 7.9.6   | Enrutamiento cliente     |
| ESLint              | 9.39.1  | Linter para calidad de código |
| PostCSS             | 8.5.6   | Procesamiento CSS        |

### Backend

| Tecnología          | Propósito                       |
|---------------------|---------------------------------|
| Node.js             | Runtime JavaScript              |
| Express             | Framework web y servidor API    |
| MongoDB Atlas       | Base de datos en la nube        |
| Render              | Proveedor cloud despliegue del sercidor |
                     

---

## Estructura del Proyecto

retro_bros/
├── client/ # Código frontend React
│ ├── src/ # Componentes, API, estilos
│ ├── api/ # Comunicación HTTP con backend
│ ├── components/ # UI reusable
│ └── package.json # Dependencias frontend
├── server/ # Backend Express + Node.js
│ ├── models/ # Definiciones Mongoose
│ ├── routes/ # Rutas API
│ └── server.js # Servidor principal
├── README.md # Documentación del proyecto


---

## Comandos de Desarrollo

Ejecuta estos comandos dentro del directorio `client/` para desarrollo y producción:

| Comando           | Descripción                             |
|-------------------|---------------------------------------|
| `npm run dev`     | Inicia servidor de desarrollo con hot reload |
| `npm run build`   | Crea build optimizado para producción  |
| `npm run lint`    | Ejecuta ESLint para revisar calidad de código |
| `npm run preview` | Previsualiza el build en local          |

Para el backend, ejecuta `node server/server.js` o usa Nodemon para desarrollo.

---

## Características Principales

- Gestión completa de colecciones (CRUD) para videojuegos y consolas retro.  
- Interfaz responsive con Tailwind CSS para móvil y desktop.  
- Filtrado y búsqueda rápida en la interfaz cliente.  
- Componente reutilizable `RetroCard`.  
- Código moderno en React usando hooks (`useState`, `useEffect`, `useMemo`).  

---

## Principios de Diseño

- Separación total entre frontend y backend mediante API REST.  
- Arquitectura basada en componentes para mantenibilidad y reutilización.  
- Comunicación backend abstraída en funciones `api/items.js` del cliente.  
- Uso de herramientas modernas: React 19, Vite, Tailwind CSS, etc.  
- Estructura clara enfocada en aprendizaje y buenas prácticas.

---

## Contacto

Para dudas, sugerencias o contribuciones, crea un issue o pull request en el repositorio oficial.

---

<p align="center">¡Gracias por visitar Retro Bros! 🎮🚀</p>
