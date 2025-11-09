import ImagoIcon from "@/components/icons/ImagoIcon"
import ImagoSymbol from "@/components/icons/ImagoSymbol"
import { ROUTES } from "@/data/routes"
import { cn } from "@/lib/utils"
import Link from "next/link"

const GlobalNavbar = () => {
  return (
    <header className={cn("w-full flex items-center justify-center h-11 text-white/80 sticky top-0 z-100 bg-black/80 backdrop-blur-2xl")}>
      {/** Desktop Navbar */}
      <nav className="max-w-244 w-full flex items-center justify-between h-full not-md:hidden">
        <ImagoIcon />
        {
          ROUTES.map((route) => (
            <Link key={route.name} href={route.path} className="text-[0.8rem] text-body font-light cursor-pointer">
              {route.name}
            </Link>
          ))
        }
        <ImagoSymbol name="search" />
        <ImagoSymbol name="person_crop_circle" />
      </nav>
    </header>
  )
}
export default GlobalNavbar