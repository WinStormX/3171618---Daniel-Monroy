import React from "react";

export const SearchBar: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};
