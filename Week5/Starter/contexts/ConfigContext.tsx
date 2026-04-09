import React, { createContext, useContext, useEffect, useState } from "react";

export interface ConfigState {
  theme: "light" | "dark" | "system";
  fontSize: "small" | "medium" | "large";
  density: "compact" | "normal" | "spacious";
  notifications: {
    email: boolean;
    push: boolean;
    sound: boolean;
  };
}

const defaultConfig: ConfigState = {
  theme: "system",
  fontSize: "medium",
  density: "normal",
  notifications: { email: true, push: false, sound: true },
};

const ConfigContext = createContext<{
  config: ConfigState;
  setConfig: React.Dispatch<React.SetStateAction<ConfigState>>;
}>({ config: defaultConfig, setConfig: () => {} });

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ConfigState>(() => {
    const saved = localStorage.getItem("config");
    return saved ? JSON.parse(saved) : defaultConfig;
  });

  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
