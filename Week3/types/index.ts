// types/index.ts
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export interface Stats {
  totalProducts: number;
  dailySales: number;
  lowStockCount: number;
}

export interface RealTimeData {
  activeOrders: number;
  lastUpdated: string;
}
