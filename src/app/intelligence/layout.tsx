import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Imago Intelligence - Imago (IN)",
    description: "Imago Intelligence",
}

export default function IntelligenceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}