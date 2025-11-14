"use client";

import ImagoSymbol from "@/components/icons/ImagoSymbol";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const SuggestionBar = () => {
    const { isSignedIn, isLoaded } = useUser()
    if (!isLoaded || isSignedIn) return null
    return (
        <div className="w-full flex items-center justify-center md:text-sm text-body gap-1 md:font-medium px-3 py-2" >
            <p className="text-black/80">Connect to imago for better experience.</p>
            <Link href={"/sign-in"} className="flex items-center justify-center text-primary group">
                <p className="group-hover:underline">Connect</p>
                <ImagoSymbol name="chevron_right" size="12px" />
            </Link>
        </div>
    )
}
export default SuggestionBar