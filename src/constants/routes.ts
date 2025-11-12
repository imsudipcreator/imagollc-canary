export type Route = {
  name: string;
  path: string;
  children?: Route[];
};

export const ROUTES: Route[] = [
  {
    name: "Discover",
    path: "/",
  },
  {
    name: "iStore",
    path: "/istore",
  },
  {
    name: "One",
    path: "/one",
  },
  {
    name: "intelligence",
    path: "/intelligence",
    children: [
      { name: "Imago Chat", path: "/intelligence/chat" },
      { name: "Imago Community", path: "/intelligence/community" },
      { name: "Imago Vision", path: "/intelligence/vision" },
      { name: "Imago Playground", path: "/intelligence/playground" },
    ],
  },
  {
    name: "Developer",
    path: "/developer",
    children: [
      { name: "Imago Creator", path: "/developer/icreator" },
      { name: "Imago Editor", path: "/developer/ieditor" },
      { name: "Documentation", path: "/developer/docs" },
    ],
  },
  {
    name: "Support",
    path: "/support",
    children: [
      { name: "Contact Us", path: "/support/contact" },
      { name: "FAQ", path: "/support/faq" },
      { name: "Report a Bug", path: "/support/bug" },
    ],
  },
  {
    name: "Legal",
    path: "/policy",
    children: [
      { name: "Privacy Policy", path: "/policy/privacy" },
      { name: "Terms of Service", path: "/policy/terms" },
      { name: "Submission Guidelines", path: "/policy/submission" },
      { name: "Developer Agreement", path: "/policy/developer" },
    ],
  },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "About iStore", path: "/about/istore" },
      { name: "About One", path: "/about/one" },
      { name: "About Intelligence", path: "/about/intelligence" },
    ],
  },
];

export const QUICK_LINKS = [
  { name: "iStore", path: "/apps" },
  { name: "Intelligence", path: "/intelligence" },
  { name: "Community", path: "/community" },
];

export const EXPLORE_ROUTES = [
  { name: "Home", path: "/" },
  { name: "iStore", path: "/store" },
  { name: "webStore", path: "/websites" },
  { name: "Intelligence", path: "/intelligence" },
  { name: "Community", path: "/community" },
  { name: "One", path: "/imago-one" },
];

export const ACCOUNT_ROUTES = [
  { name: "Manage Your Imago Account", path: "/" },
  { name: "Imago Creator Account", path: "/account" },
];

export const DEVELOPER_ROUTES = [
  { name: "Overview", path: "/developer" },
  { name: "iCreator", path: "/developer/icreator" },
  { name: "iEditor", path: "/developer/ieditor" },
  { name: "Docs", path: "/developer/docs" },
];

export const SUPPORT_ROUTES = [
  { name: "Contact Us", path: "/support/contact" },
  { name: "FAQs", path: "/support/faq" },
  { name: "Report a Bug", path: "/support/report" },
];

export const LEGAL_ROUTES = [
  { name: "Privacy Policy", path: "/policy/privacy" },
  { name: "Terms of Service", path: "/policy/terms" },
  { name: "Submission Guidelines", path: "/policy/submission" },
  { name: "Developer Agreement", path: "/policy/developer" },
];

export const ABOUT_ROUTES = [
  { name: "Our Vision", path: "/about/vision" },
  { name: "Brand Assets", path: "/about/brand" },
];

export const NAVIGATION_SECTIONS = [
  { name: "Explore Imago", routes: EXPLORE_ROUTES },
  { name: "Account", routes: ACCOUNT_ROUTES },
  { name: "Developer", routes: DEVELOPER_ROUTES },
  { name: "Support", routes: SUPPORT_ROUTES },
  { name: "Legal", routes: LEGAL_ROUTES },
  { name: "About", routes: ABOUT_ROUTES },
];
