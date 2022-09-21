import webpack from "webpack";
import { BuildOptions } from "./types/config"
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const { paths, mode, isDev } = options 
  
  return {
    mode: mode,
    entry: paths.entry, // Стартовая точка нашего приложения (Избегаем хардкода пути './src/index.js').
    output: { // Настройки того куда и как мы будем делать сборку нашего приложения 
      filename: '[name].[contenthash].js', // Главный файл в сборке нашего приложения -- [name] шаблон. Так же можно указать несколько энтрипоинтов.
      path: paths.build, // Иногда называют dist
      clean: true  // Для чистки мусора 
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
}
