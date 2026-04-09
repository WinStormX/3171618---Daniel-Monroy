import React from "react";

export const SortSelector: React.FC<{ sort: string; setSort: (s: string) => void }> = ({ sort, setSort }) => {
  return (
    <select value={sort} onChange={e => setSort(e.target.value)}>
      <option value="name-asc">Nombre (A-Z)</option>
      <option value="name-desc">Nombre (Z-A)</option>
      <option value="price-asc">Precio (menor a mayor)</option>
      <option value="price-desc">Precio (mayor a menor)</option>
    </select>
  );
};
