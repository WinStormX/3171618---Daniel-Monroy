import React, { useEffect, useState } from "react";
import { Product } from "../types";
import { fetchItems } from "../utils/api";

export const ItemList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchItems(controller.signal)
      .then(data => setProducts(data))
      .catch(() => setError("Error al cargar productos"))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - Stock: {p.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};
