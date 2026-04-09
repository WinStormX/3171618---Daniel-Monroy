import { useState } from "react";
import { Product } from "./Types";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Stats from "./components/Stats";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addProduct = (product: Product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (id: number, updated: Product) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updated } : p));
    setEditingId(null);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const editingProduct = products.find(p => p.id === editingId) || null;

  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Stats products={products} />
      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        editingProduct={editingProduct}
      />
      <ProductList
        products={filtered}
        deleteProduct={deleteProduct}
        setEditingId={setEditingId}
      />
    </div>
  );
}

export default App;