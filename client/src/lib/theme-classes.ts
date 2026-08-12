/** Classes reutilizáveis para tema claro/escuro nas seções da landing */
export const section = {
  light: "bg-white dark:bg-slate-950",
  muted: "bg-slate-50 dark:bg-slate-900",
  card: "bg-slate-50/50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-white dark:hover:bg-slate-900",
  cardSolid: "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800",
  input: "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950",
} as const;

export const text = {
  heading: "text-slate-800 dark:text-slate-100",
  body: "text-slate-500 dark:text-slate-400",
  bodyStrong: "text-slate-600 dark:text-slate-300",
  accent: "text-blue-600 dark:text-blue-400",
  muted: "text-slate-400 dark:text-slate-500",
} as const;

export const headerShell = {
  base: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  scrolled:
    "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800",
  top: "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm",
  mobile: "lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 shadow-lg",
  link: "text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200",
  mobileLink: "text-slate-700 dark:text-slate-200 font-medium py-2.5 text-sm",
} as const;
