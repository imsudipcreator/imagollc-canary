"use client";

import { createContext, useContext, useState } from "react";


type NavType =
    | "search"
    | "menu"
    | "account"
    | null


interface NavbarContextType {
    open: NavType;
    setOpen: (open: NavType) => void;
}

export const NavbarContext = createContext<NavbarContextType | null>(null);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState<NavType>(null);
    // console.log("open", open);
    return (
        <NavbarContext.Provider value={{ open, setOpen }}>
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