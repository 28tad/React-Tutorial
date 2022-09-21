import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [ // Подключаем массив Плагинов (Не забываем импортировать).
    new HtmlWebpackPlugin({
      template: paths.html // Указали флаг template и передали путь к файлу на основе которого он будет собирать HTML 
    }),
    new webpack.ProgressPlugin()
  ]
}
