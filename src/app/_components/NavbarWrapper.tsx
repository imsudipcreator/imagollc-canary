"use client";

import { useState } from "react";
import ExpandedNavbar from "./ExpandedNavbar";
import GlobalNavbar from "./GlobalNavbar";

const NavbarWrapper = () => {
    const [theme, setTheme] = useState(null);
    return (
        <>
            <GlobalNavbar />
            <ExpandedNavbar />
        </>
    )
}
export default NavbarWrapper