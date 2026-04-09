Week 5 - Proyecto CRUD Ferretería Lubix 🛠️
📋 Descripción
Aplicación en React + TypeScript que gestiona productos de una ferretería. Este proyecto extiende el CRUD básico de semanas anteriores, incorporando mejoras en validación, búsqueda y estadísticas.

🎯 Funcionalidades
📋 Listar productos con nombre, categoría, precio, stock y disponibilidad.

➕ Agregar nuevos productos mediante formulario controlado.

✏️ Editar productos existentes con datos prellenados.

🗑️ Eliminar productos de la lista.

🔍 Buscar productos por nombre o categoría.

📊 Mostrar estadísticas de stock y disponibilidad.

🏗️ Tecnologías
React

TypeScript

Vite

CSS para estilos básicos

🚀 Instalación
bash
pnpm install
pnpm dev
📂 Estructura
Code
src/
├── App.tsx
├── main.tsx
├── types/
│   └── index.ts
├── components/
│   ├── Header.tsx
│   ├── ToolForm.tsx
│   ├── ToolList.tsx
│   ├── ToolCard.tsx
│   ├── SearchBar.tsx
│   └── Stats.tsx
└── styles/
    └── App.css
✅ Checklist
CRUD completo funcionando

Búsqueda y estadísticas implementadas

Código tipado en TypeScript

Componentes separados y reutilizables

Estado manejado con useState

.gitignore configurado para excluir node_modules