"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { APP_CONFIG } from "@/app.config";

export type ThemeConfig = {
  primaryColor: string;
  primaryForeground: string;
};

const defaultTheme: ThemeConfig = {
  primaryColor: APP_CONFIG.theme.primaryColor,
  primaryForeground: APP_CONFIG.theme.primaryForeground,
};

const ThemeContext = createContext<{
  config: ThemeConfig;
  setConfig: (config: ThemeConfig) => void;
}>({
  config: defaultTheme,
  setConfig: () => {},
});

export function ThemeProvider({
  children,
  initialConfig = defaultTheme,
}: {
  children: React.ReactNode;
  initialConfig?: ThemeConfig;
}) {
  const [config, setConfig] = useState<ThemeConfig>(initialConfig);

  useEffect(() => {
    // Inject CSS variables for tailwind to pick up
    const root = document.documentElement;
    root.style.setProperty("--primary", config.primaryColor);
    root.style.setProperty("--primary-foreground", config.primaryForeground);
  }, [config]);

  return (
    <ThemeContext.Provider value={{ config, setConfig }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
