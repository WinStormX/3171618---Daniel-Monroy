import React from "react";
import { Product } from "../types";

export const ItemCard: React.FC<{ item: Product }> = ({ item }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{item.name}</h3>
      <p>Categoría: {item.category}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      {item.available ? <span style={{ color: "green" }}>Disponible</span> : <span style={{ color: "red" }}>Agotado</span>}
    </div>
  );
};
