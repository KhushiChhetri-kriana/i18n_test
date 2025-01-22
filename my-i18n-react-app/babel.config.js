module.exports = {
    plugins: [
      [
        "i18next-extract",
        {
          locales: ["en"],
          outputPath: "locales/{{locale}}/translation.js",
          customOutputTransform: (translations, locale) => {
            const content = `const translations = ${JSON.stringify(
              translations,
              null,
              2
            )};\n\nexport default translations;`;
            return content;
          },
        },
      ],
    ],
  };
  