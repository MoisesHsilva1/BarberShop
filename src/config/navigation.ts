export interface NavigationItem {
  label: string;
  href: string;
}

export const NAVIGATION_ROUTES = [
  { label: "HOME", href: "/" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "CONTATO", href: "/contato" },
] as const;
