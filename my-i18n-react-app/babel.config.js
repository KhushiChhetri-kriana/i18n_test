module.exports = {
    presets: [
      "@babel/preset-react", // Add this to enable JSX syntax
    ],
    plugins: [
      [
        "i18next-extract",
        {
          locales: ["en"],
          outputPath: "locales/{{locale}}/translation.js",
          customOutputTransform: (translations) => {
            return `const translations = ${JSON.stringify(
              translations,
              null,
              2
            )};\n\nexport default translations;`;
          },
        },
      ],
    ],
  };
  