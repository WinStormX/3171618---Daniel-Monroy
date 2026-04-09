import { Product } from "../Types";
import ProductCard from "./ProductCar";

interface Props {
  products: Product[];
  deleteProduct: (id: number) => void;
  setEditingId: (id: number) => void;
}

const ProductList: React.FC<Props> = ({ products, deleteProduct, setEditingId }) => {
  if (!products.length) return <p>No hay productos</p>;

  return (
    <div>
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          deleteProduct={deleteProduct}
          setEditingId={setEditingId}
        />
      ))}
    </div>
  );
};

export default ProductList;