import { lazy } from "react";

// этот файл делается доя удобства, чтобы отделить лэйзи компонент от обычного

export const AboutPageAsync = lazy( () => import('./AboutPage'));

// Нельзя добавлять lazy loading для всех компонентов в проекте, это очень сильно ухудшает UX
// Лэйзи лоадинг надо делать либо для больших чанков, либо для компонентов которые при открытии страницы 
// не попадают в пределы вьюпорта, либо для отложенных компонентов, 
// например содержимого модалки, которую пользователь может никогда не открыть