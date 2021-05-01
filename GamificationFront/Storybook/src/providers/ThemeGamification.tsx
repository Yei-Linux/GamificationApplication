import { ThemeProvider } from "@emotion/react";
import React from "react";
import { globalStyles } from "../styles/global";

export interface ThemeGamificationProps {
  children: any;
}

const ThemeGamification = ({ children }: ThemeGamificationProps) => {
  return (
    <ThemeProvider theme={{}}>
      {globalStyles}
      {children}
    </ThemeProvider>
  );
};

export default ThemeGamification;
