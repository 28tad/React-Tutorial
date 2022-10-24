
export type BuildMode = 'production' | 'development'

export interface BuildPaths { 
  entry: string; // Путь до энтри 
  build: string; // Путь до сборки
  html: string; // Путь до HTML 
  src: string; // путь до папки с исходным кодом
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions { 
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
