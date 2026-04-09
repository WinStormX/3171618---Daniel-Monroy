import React from "react";
import { ItemList } from "./ItemList";
import { StatsCard } from "./StatsCard";
import { RealTimeIndicator } from "./RealTimeIndicator";

export const Dashboard: React.FC = () => {
  return (
    <div style={{ display: "grid", gap: "20px" }}>
      <h1>Dashboard Ferretería</h1>
      <ItemList />
      <StatsCard />
      <RealTimeIndicator />
    </div>
  );
};
