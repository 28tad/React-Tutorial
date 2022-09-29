import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {  // options.isDev из-за Деструктуризации сразу достаем isDev; 


  const cssLoader = { 
    test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.')), // Применяется модульный подход Если в участке пути файла есть module (если Вернет TRUE)
                localIdentName: isDev                                             // свойство auto опр. для какого файла применять модули, а для какого нет 
                    ? '[path][name]__[local]' 
                    : '[hash:base64:8]'
              },
            }
          },
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
