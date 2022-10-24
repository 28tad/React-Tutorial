import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return { 
     // Расширение для импорта
      extensions: ['.ts', '.tsx', '.js'],
      preferAbsolute: true,
      modules: [options.paths.src, 'node_modules'],
      mainFiles: ['index'],
      alias: {}
  }
}
