import ImagoIcon from "@/components/icons/ImagoIcon"
import ImagoSymbol from "@/components/icons/ImagoSymbol"
import { ROUTES } from "@/constants/routes"
import { cn } from "@/lib/utils"
import Link from "next/link"
import AnimatedHamburger from "./AnimatedHamburger"
import { useNavbar } from "../_contexts/NavbarContext"

const GlobalNavbar = () => {
  const { open, setOpen } = useNavbar()
  return (
    <header className={cn("w-full flex items-center justify-center h-11 text-foreground hover:text-black sticky top-0 z-100 bg-background/80 backdrop-blur-2xl")}>
      {/** Desktop Navbar */}
      <nav className="max-w-244 w-full flex items-center justify-between h-full not-md:hidden">
        <Link href={'/'} className="cursor-pointer">
          <ImagoIcon />
        </Link>
        {
          ROUTES.map((route) => (
            <Link key={route.name} href={route.path} className="text-[0.8rem] text-body cursor-pointer">
              {route.name}
            </Link>
          ))
        }
        <button onClick={() => open === "search" ? setOpen(null) : setOpen("search")} className="cursor-pointer">
          <ImagoSymbol name="search" size="20px" />
        </button>
        <button onClick={() => open === "account" ? setOpen(null) : setOpen("account")} className="cursor-pointer">
          <ImagoSymbol name="person_crop_circle" size="20px" />
        </button>
      </nav>



      {/** Device Navbar */}
      <nav className="w-[92%] flex items-center justify-between h-full md:hidden">
        <ImagoIcon size={16} />
        <div className="flex items-center gap-7">
          <button onClick={() => setOpen("search")} className={`${open !== null ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-opacity duration-300`}>
            <ImagoSymbol name="search" size="20px" />
          </button>
          <button onClick={() => setOpen("account")} className={`${open !== null ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-opacity duration-300`}>
            <ImagoSymbol name="person_crop_circle" size="20px" />
          </button>
          <AnimatedHamburger isOpen={open} toggle={() => open !== null ? setOpen(null) : setOpen("menu")} />
        </div>
      </nav>
    </header>
  )
}
export default GlobalNavbar