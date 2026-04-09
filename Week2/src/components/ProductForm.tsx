import { useState, useEffect } from "react";
import { Product } from "../Types";

interface Props {
  addProduct: (p: Product) => void;
  updateProduct: (id: number, p: Product) => void;
  editingProduct: Product | null;
}

const ProductForm: React.FC<Props> = ({ addProduct, updateProduct, editingProduct }) => {
  const [form, setForm] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    stock: 0,
    category: "",
    available: true
  });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.name.trim()) return alert("Nombre requerido");

    editingProduct
      ? updateProduct(editingProduct.id, form)
      : addProduct(form);

    setForm({ id: 0, name: "", price: 0, stock: 0, category: "", available: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
      <input name="price" type="number" value={form.price} onChange={handleChange} />
      <input name="stock" type="number" value={form.stock} onChange={handleChange} />
      <input name="category" placeholder="Categoría" value={form.category} onChange={handleChange} />

      <label>
        Disponible
        <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
      </label>

      <button type="submit">Guardar</button>
    </form>
  );
};

export default ProductForm;