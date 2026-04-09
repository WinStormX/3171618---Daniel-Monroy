import { Product } from "../Types";

const Stats = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <p>Total: {products.length}</p>
      <p>Disponibles: {products.filter(p => p.available).length}</p>
    </div>
  );
};

export default Stats;