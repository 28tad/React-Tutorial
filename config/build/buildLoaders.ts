import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescriptLoader = { // Настройка обработки файлов которые выходят за рамки JavaScript 
      test: /\.tsx?$/, // Свойство test определяет, какой файл/файлы должны быть трансформированы.
      use: 'ts-loader', // Свойство use указывает, какой загрузчик должен использоваться для выполнения трансформации.
      exclude: /node_modules/, // Исключаем проверку нод модулей
  }
  return [ 
      typescriptLoader
    ]
}
