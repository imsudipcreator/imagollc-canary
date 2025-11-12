"use client";

import { usePathname } from "next/navigation";
import ExpandedNavbar from "./ExpandedNavbar";
import GlobalNavbar from "./GlobalNavbar";

const NavbarWrapper = () => {
    const pathname = usePathname()
    const navbarExcludedRoutes = ['/community', '/developer/icreator', '/intelligence', '/sign-in', '/sign-up', '/labs/nsfw']
    const shouldHideNavbar = navbarExcludedRoutes.some((route) => pathname.startsWith(route))

    if (shouldHideNavbar) {
        return null
    }
    return (
        <>
            <GlobalNavbar />
            <ExpandedNavbar />
        </>
    )
}
export default NavbarWrapper