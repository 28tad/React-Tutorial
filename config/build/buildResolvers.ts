import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return { 
     // Расширение для импорта
      extensions: ['.ts', '.tsx', '.js'],
  }
}
