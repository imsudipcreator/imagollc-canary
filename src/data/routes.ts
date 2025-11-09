type Route = {
  name: string;
  path: string;
  children?: Route[];
};

export const ROUTES: Route[] = [
  {
    name: "Home",
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
  },
  {
    name: "Developer",
    path: "/developer",
  },
  {
    name: "Support",
    path: "/support",
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
