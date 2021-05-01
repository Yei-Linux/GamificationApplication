import React from "react";
import { ThemeProvider } from "@emotion/react";

const EmotionThemeProvider = (storyFn) => (
  <ThemeProvider theme={{}}>
    {storyFn()}
  </ThemeProvider>
);

export default EmotionThemeProvider;
