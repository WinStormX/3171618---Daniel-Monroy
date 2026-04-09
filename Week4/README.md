Week 4 - Proyecto CRUD Ferretería Lubix 🛠️
📋 Descripción
Aplicación en React + TypeScript que extiende el CRUD básico de semanas anteriores. En esta semana se incorporan mejoras en la organización de componentes y validación de formularios.

🎯 Funcionalidades
➕ Agregar productos con nombre, categoría, precio y stock.

📋 Listar productos registrados.

✏️ Editar productos existentes con datos prellenados.

🗑️ Eliminar productos de la lista.

✅ Validación básica en formularios (campos requeridos, valores positivos).

🏗️ Tecnologías
React

TypeScript

Vite

CSS

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
└── styles/
    └── App.css
✅ Checklist
CRUD completo funcionando

Validación de formularios implementada

Código tipado en TypeScript

Componentes separados y reutilizables

Estado manejado con useState

.gitignore configurado para excluir node_modules