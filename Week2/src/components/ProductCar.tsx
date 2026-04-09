import { Product } from "../Types";

interface Props {
  product: Product;
  deleteProduct: (id: number) => void;
  setEditingId: (id: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, deleteProduct, setEditingId }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>{product.category}</p>
      <p>{product.available ? "Disponible" : "No disponible"}</p>

      <button onClick={() => setEditingId(product.id)}>Editar</button>
      <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
    </div>
  );
};

export default ProductCard;