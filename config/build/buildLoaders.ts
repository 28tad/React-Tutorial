import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): webpack.RuleSetRule[] {


  const cssLoader = { 
    test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
  }

  const typescriptLoader = { // Настройка обработки файлов которые выходят за рамки JavaScript 
      test: /\.tsx?$/, // Свойство test определяет, какой файл/файлы должны быть трансформированы.
      use: 'ts-loader', // Свойство use указывает, какой загрузчик должен использоваться для выполнения трансформации.
      exclude: /node_modules/, // Исключаем проверку нод модулей
  }
  return [ 
      typescriptLoader,
      cssLoader
    ]
}
