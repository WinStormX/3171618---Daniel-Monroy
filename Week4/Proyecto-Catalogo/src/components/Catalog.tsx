import React, { useState } from "react";
import { PRODUCTS } from "../data/items";
import { ItemList } from "./ItemList";
import { SearchBar } from "./SearchBar";
import { FilterPanel } from "./FilterPanel";
import { SortSelector } from "./SortSelector";
import { EmptyState } from "./EmptyState";

export const Catalog: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState<string>("name-asc");

  // Filtrado
  let filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  if (category) filtered = filtered.filter(p => p.category === category);
  if (onlyAvailable) filtered = filtered.filter(p => p.available);

  // Ordenamiento
  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case "name-asc": return a.name.localeCompare(b.name);
      case "name-desc": return b.name.localeCompare(a.name);
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      default: return 0;
    }
  });

  return (
    <div>
      <h1>Catálogo Ferretería</h1>
      <SearchBar value={search} onChange={setSearch} />
      <FilterPanel category={category} setCategory={setCategory} onlyAvailable={onlyAvailable} setOnlyAvailable={setOnlyAvailable} />
      <SortSelector sort={sort} setSort={setSort} />
      {sorted.length === 0 ? <EmptyState /> : <ItemList items={sorted} />}
      <p>{sorted.length} resultados</p>
    </div>
  );
};
