import ImagoIcon from "@/components/icons/ImagoIcon"
import ImagoSymbol from "@/components/icons/ImagoSymbol"
import { ROUTES } from "@/constants/routes"
import { cn } from "@/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { useRef } from "react"
import { useNavbar } from "../_contexts/NavbarContext"
import AnimatedHamburger from "./AnimatedHamburger"

const GlobalNavbar = () => {
  const { open, setOpen, openSubRoutes, setOpenSubRoutes, closeNavs } = useNavbar()
  const closeSubRouteRef = useRef<HTMLButtonElement>(null)

  function handleMouseHover(name: string) {
    const hoveredRoute = ROUTES.find((item) => item.name === name)
    if (!hoveredRoute) return
    const hasChildren = hoveredRoute.children

    if (hasChildren) {
      setOpen(hoveredRoute.name.toLowerCase())
    } else {
      setOpen(null)
    }
  }



  useGSAP(() => {
    const target = closeSubRouteRef?.current
    if (!target) return
    if (openSubRoutes !== null) {
      target.classList.remove("pointer-events-none");

      gsap.fromTo(target, {
        opacity: 0,
        x: 20,
        scale: 0
      }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.5
      })
    } else {
      gsap.to(target, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        onComplete: () => {
          target.classList.add("pointer-events-none")
        }
      })
    }

  }, [openSubRoutes, open])
  return (
    <header className={cn("w-full flex items-center justify-center h-11 text-foreground hover:text-black sticky top-0 z-100  backdrop-blur-2xl", open ? "bg-background" : "bg-background/70")}>
      {/** Desktop Navbar */}
      <nav className="max-w-244 w-full flex items-center justify-between h-full not-lg:hidden">
        <Link href={'/'} className="cursor-pointer">
          <ImagoIcon />
        </Link>
        {
          ROUTES.map((route) => (
            <Link onMouseEnter={() => handleMouseHover(route.name)} key={route.name} href={route.path} className="text-[0.8rem] text-body cursor-pointer">
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
      <nav className="w-[92%] flex items-center justify-between h-full lg:hidden">
        <div className="flex items-center h-fit relative ">
          <Link href={'/'} className={`${open ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} duration-500 `}>
            <ImagoIcon size={16} />
          </Link>
          <button ref={closeSubRouteRef} onClick={() => openSubRoutes !== null && setOpenSubRoutes(null)}
            className={cn(
              "flex-center absolute left-0 top-0 scale-100 pointer-events-auto",
              openSubRoutes === null && 'pointer-events-none opacity-0'
            )}>
            <ImagoSymbol size="20px" name="chevron_left" />
          </button>
        </div>

        <div className="flex items-center gap-7">
          <button onClick={() => setOpen("search")} className={`${open !== null ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-opacity duration-300`}>
            <ImagoSymbol name="search" size="20px" />
          </button>
          <button onClick={() => setOpen("account")} className={`${open !== null ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-opacity duration-300`}>
            <ImagoSymbol name="person_crop_circle" size="20px" />
          </button>
          <AnimatedHamburger isOpen={open} toggle={() => open !== null ? closeNavs() : setOpen("menu")} />
        </div>
      </nav>
    </header>
  )
}
export default GlobalNavbar