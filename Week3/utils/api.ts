import { Product, RealTimeData, Stats } from "../types";

// utils/api.ts
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Martillo", category: "Herramientas", price: 25000, stock: 12 },
  { id: 2, name: "Caja de clavos", category: "Materiales", price: 8000, stock: 3 },
  { id: 3, name: "Taladro", category: "Eléctricos", price: 150000, stock: 5 },
];

export const fetchItems = async (signal?: AbortSignal): Promise<Product[]> => {
  await delay(1000);
  return MOCK_PRODUCTS;
};

export const fetchStats = async (): Promise<Stats> => {
  await delay(500);
  return {
    totalProducts: MOCK_PRODUCTS.length,
    dailySales: 27,
    lowStockCount: MOCK_PRODUCTS.filter(p => p.stock < 5).length,
  };
};

export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  await delay(500);
  return {
    activeOrders: Math.floor(Math.random() * 10),
    lastUpdated: new Date().toLocaleTimeString(),
  };
};
