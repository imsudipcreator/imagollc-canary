"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function GlobalThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("theme-intelligence", "theme-legal", "theme-icreator");
    if (pathname.startsWith("/intelligence")) document.body.classList.add("theme-intelligence");
    if (pathname.startsWith("/legal")) document.body.classList.add("theme-legal");
    if (pathname.startsWith("/icreator")) document.body.classList.add("theme-icreator");
  }, [pathname]);

  return <>{children}</>;
}