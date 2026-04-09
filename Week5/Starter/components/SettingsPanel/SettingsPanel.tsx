import React from "react";
import { useConfig } from "../../contexts/ConfigContext";

export const SettingsPanel: React.FC = () => {
  const { config, setConfig } = useConfig();

  return (
    <div>
      <h2>Configuración UI Ferretería</h2>

      <div>
        <h3>Tema</h3>
        <select
          value={config.theme}
          onChange={(e) => setConfig({ ...config, theme: e.target.value as any })}
        >
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
          <option value="system">Sistema</option>
        </select>
      </div>

      <div>
        <h3>Tamaño de texto</h3>
        <select
          value={config.fontSize}
          onChange={(e) => setConfig({ ...config, fontSize: e.target.value as any })}
        >
          <option value="small">Pequeño</option>
          <option value="medium">Mediano</option>
          <option value="large">Grande</option>
        </select>
      </div>

      <div>
        <h3>Densidad</h3>
        <select
          value={config.density}
          onChange={(e) => setConfig({ ...config, density: e.target.value as any })}
        >
          <option value="compact">Compacto</option>
          <option value="normal">Normal</option>
          <option value="spacious">Espacioso</option>
        </select>
      </div>

      <div>
        <h3>Notificaciones</h3>
        <label>
          <input
            type="checkbox"
            checked={config.notifications.email}
            onChange={(e) =>
              setConfig({ ...config, notifications: { ...config.notifications, email: e.target.checked } })
            }
          />
          Email
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.notifications.push}
            onChange={(e) =>
              setConfig({ ...config, notifications: { ...config.notifications, push: e.target.checked } })
            }
          />
          Push
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.notifications.sound}
            onChange={(e) =>
              setConfig({ ...config, notifications: { ...config.notifications, sound: e.target.checked } })
            }
          />
          Sonido
        </label>
      </div>

      <button onClick={() => setConfig({
        theme: "system",
        fontSize: "medium",
        density: "normal",
        notifications: { email: true, push: false, sound: true }
      })}>
        Resetear configuración
      </button>
    </div>
  );
};
