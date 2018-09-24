const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.vue"],
      whitelist: ["html", "body"],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract(content) {
              return content.match(/[A-z0-9-:/]+/g) || [];
            }
          },
          extensions: ["vue"]
        }
      ]
    }),
    autoprefixer
  ]
};
