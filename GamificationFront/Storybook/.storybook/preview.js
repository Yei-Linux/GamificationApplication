import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
