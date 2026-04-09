import React, { useEffect, useState } from "react";
import { Stats } from "../types";
import { fetchStats } from "../utils/api";

export const StatsCard: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetchStats().then(setStats);
  }, []);

  if (!stats) return <p>Cargando estadísticas...</p>;

  return (
    <div>
      <h2>Estadísticas</h2>
      <p>Total productos: {stats.totalProducts}</p>
      <p>Ventas hoy: {stats.dailySales}</p>
      <p>Stock bajo: {stats.lowStockCount}</p>
    </div>
  );
};
