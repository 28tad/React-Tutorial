import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true // Позволяет проксировать запросы через index page  
  }                          // т.е при перезагруке страницы, не на главном компоненте  
}                            // запрос обработается через корневую страницу (index) и вернет компонент

