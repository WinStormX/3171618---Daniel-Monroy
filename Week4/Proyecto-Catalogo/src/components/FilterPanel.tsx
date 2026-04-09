import React from "react";

export const FilterPanel: React.FC<{
  category: string | null;
  setCategory: (c: string | null) => void;
  onlyAvailable: boolean;
  setOnlyAvailable: (v: boolean) => void;
}> = ({ category, setCategory, onlyAvailable, setOnlyAvailable }) => {
  return (
    <div>
      <select
        value={category ?? ""}
        onChange={(e) => setCategory(e.target.value || null)}
      >
        <option value="">Todas las categorías</option>
        <option value="Herramientas">Herramientas</option>
        <option value="Eléctricos">Eléctricos</option>
        <option value="Materiales">Materiales</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(e) => setOnlyAvailable(e.target.checked)}
        />
        Solo disponibles
      </label>

      <button
        onClick={() => {
          setCategory(null);
          setOnlyAvailable(false);
        }}
      >
        Limpiar filtros
      </button>
    </div>
  );
};
