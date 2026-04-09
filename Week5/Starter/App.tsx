import React from "react";
import { ConfigProvider } from "./contexts/ConfigContext";
import { SettingsPanel } from "./components/SettingsPanel/SettingsPanel";
import { Card } from "./components/Card/Card";

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <div>
        <SettingsPanel />
        <h1>Catálogo Ferretería</h1>
        <Card>
          <Card.Header>
            <Card.Title>Martillo</Card.Title>
          </Card.Header>
          <Card.Body>Precio: $25.000 - Stock: 12</Card.Body>
          <Card.Footer>Herramientas</Card.Footer>
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default App;
