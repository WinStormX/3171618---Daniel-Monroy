import React from "react";
import { Product } from "../types";
import { ItemCard } from "./Itemcard";

export const ItemList: React.FC<{ items: Product[] }> = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
