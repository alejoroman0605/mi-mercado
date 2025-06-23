# Mi Mercado

Aplicación React + Vite que consume la Fake Store API y permite:

* Listar productos con filtros por categoría y paginación.
* Ver detalle de cada producto.
* Añadir productos al carrito y modificar cantidades.
* Finalizar la compra (flujo simulado) con alertas SweetAlert2.

## Requisitos

* Node.js ≥ 18

## Instalación

```bash
# clona el repositorio
npm install          # instala dependencias
```

## Scripts útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Arranca Vite en modo desarrollo (http://localhost:5173). |
| `npm run build` | Compila la aplicación para producción en `dist/`. |
| `npm run preview` | Sirve la build para comprobar el resultado final. |
| `npm run lint` | Ejecuta ESLint. |

## Tecnologías

* React 19 + React Router 6
* Vite 6
* Tailwind CSS 4 (`@tailwindcss/vite`)
* SweetAlert2 para modales
* Lucide-React para iconos
* Axios para HTTP

## API utilizada

[Fake Store API](https://fakestoreapi.com/) – productos, categorías y autenticación demo.

### Usuario de prueba

| username | password |
|----------|----------|
| `johnd`  | `m38rmF$` |

---
¡Feliz hacking!
