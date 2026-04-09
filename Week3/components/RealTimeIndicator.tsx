import React, { useEffect, useState } from "react";
import { RealTimeData } from "../types";
import { fetchRealTimeData } from "../utils/api";

export const RealTimeIndicator: React.FC = () => {
  const [data, setData] = useState<RealTimeData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchRealTimeData();
      setData(result);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (!data) return <p>Cargando datos en tiempo real...</p>;

  return (
    <div>
      <h2>Pedidos Activos</h2>
      <p>{data.activeOrders} pedidos</p>
      <small>Última actualización: {data.lastUpdated}</small>
    </div>
  );
};
