import simplePlantUML from "@akebifiky/remark-simple-plantuml";

export default {
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [
      [simplePlantUML, { baseUrl: "https://git.ironsm4sh.nl/-/plantuml/svg" }],
    ],
  },
};
