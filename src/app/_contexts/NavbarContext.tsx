"use client";

import { createContext, useContext, useState } from "react";


export type NavType =
    | "search"
    | "menu"
    | "account"
    | "legal"
    | null


interface NavbarContextType {
    open: string | null;
    setOpen: React.Dispatch<React.SetStateAction<string | null>>;
    openSubRoutes: string | null
    setOpenSubRoutes: React.Dispatch<React.SetStateAction<string | null>>
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>
    closeNavs: () => void
}

export const NavbarContext = createContext<NavbarContextType | null>(null);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [query, setQuery] = useState("")
    const [open, setOpen] = useState<string | null>(null);
    const [openSubRoutes, setOpenSubRoutes] = useState<string | null>(null)
    // console.log("open", open);

    const closeNavs = () => {
        if (open !== null) setOpen(null)
        if (openSubRoutes !== null) setOpenSubRoutes(null)
        if (query.length > 0) setQuery("")
    }
    return (
        <NavbarContext.Provider value={{ open, setOpen, openSubRoutes, setOpenSubRoutes, query, setQuery, closeNavs }}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = () => {
    const context = useContext(NavbarContext);
    if (!context) {
        throw new Error("useNavbar must be used within a NavbarProvider");
    }
    return context;
};