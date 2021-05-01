import { addParameters, addDecorator } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { globalStyles } from "../src/styles/global";
import EmotionThemeProvider from "./decorators/EmotionThemeProvider";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator((story) => (
  <>
    {globalStyles}
    <div style={{ padding: "3rem" }}>{story()}</div>
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
