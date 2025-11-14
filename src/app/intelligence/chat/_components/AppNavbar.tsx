"use client";

import ImagoSymbol from "@/components/icons/ImagoSymbol";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/utils";

const AppNavbar = () => {
    const { open } = useSidebar()
    return (
        <header className="w-full h-12 flex-center">
            <nav className={cn("flex-1 flex items-center justify-between w-full px-4")}>
                <h1 className="font-medium text-xl">
                    Imago Intelligence
                </h1>

                <button className="bg-none text-black p-2 rounded-lg flex-center active:bg-black/10 aspect-square">
                    <ImagoSymbol name="gear" size="19px" />
                </button>
            </nav>
        </header>
    )
}
export default AppNavbar