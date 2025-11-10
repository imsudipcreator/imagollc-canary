import { cn } from "@/lib/utils"
import type { CSSProperties } from "react";

interface ImagoSymbolProps {
    name: string;
    size?: string;
    className?: string;
    styles?: CSSProperties
}

const ImagoSymbol = ({ className, name, size = "16px", styles }: ImagoSymbolProps) => {
    return (
        <i style={{ fontSize: size, ...styles }} className={cn("f7-icons", className)}>{name}</i>
    )
}
export default ImagoSymbol