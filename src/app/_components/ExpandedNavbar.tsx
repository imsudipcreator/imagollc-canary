import ImagoSymbol from "@/components/icons/ImagoSymbol";
import { ROUTES, type Route } from "@/constants/routes";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { useNavbar } from "../_contexts/NavbarContext";

const ExpandedNavbar = () => {
    const router = useRouter()
    const isMobile = useIsMobile()
    const { open, setOpen, openSubRoutes, setOpenSubRoutes, query, setQuery } = useNavbar()
    const translucentDivRef = useRef<HTMLDivElement>(null);
    const opaqueDivRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const bgDivRef = useRef<HTMLDivElement>(null);
    const navAnimationRef = useRef<gsap.core.Timeline | null>(null)
    const subRouteAnimRef = useRef<gsap.core.Timeline | null>(null)
    const subRouteDivRef = useRef<HTMLDivElement>(null)
    const routeDivRef = useRef<HTMLDivElement>(null)
    const routeElemsRef = useRef<HTMLButtonElement[]>([])

    const navMap: Record<string, { label: string, data: Route | undefined }> = {
        legal: {
            label: 'Legal Routes',
            data: ROUTES.find((route) => route.name === 'Legal'),
        },
        about: {
            label: 'About us',
            data: ROUTES.find((route) => route.name === 'About'),
        }
    };

    const currentNav = navMap[open!];


    function handleMobileRouteClick(name: string) {
        const clickedRoute = ROUTES.find((route) => route.name === name)
        if (!clickedRoute) return

        if (!clickedRoute.children) {
            router.push(clickedRoute.path ?? '/')
            setOpen(null)
            return
        } else {
            setOpenSubRoutes(clickedRoute.name)
        }

    }

    useGSAP(() => {
        const translucentDiv = translucentDivRef.current;
        const opaqueDiv = opaqueDivRef.current;
        const bgDiv = bgDivRef.current

        if (!translucentDiv || !opaqueDiv) return
        if (navAnimationRef.current) {
            navAnimationRef.current.kill()
            navAnimationRef.current = null
        }

        const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });
        navAnimationRef.current = tl

        if (open !== null) {
            translucentDiv.style.pointerEvents = "auto";
            gsap.set(bgDiv, { paddingTop: "28px" });

            tl.to(translucentDiv, {
                opacity: 1,
            }).to(opaqueDiv, {
                height: isMobile ? "100dvh" : "60dvh",
            }, "-=0.3").to(bgDiv, {
                height: "100%",
            });
        } else {
            tl.to(opaqueDiv, {
                height: "0dvh",
            }).to(translucentDiv, {
                opacity: 0,
                onComplete: () => {
                    translucentDiv.style.pointerEvents = "none";
                    if (bgDiv) {
                        gsap.set(bgDiv, { paddingTop: "0px" });
                    }
                }
            });

        }

        // Optional: return cleanup to prevent stacking
        return () => {
            tl.kill();
            navAnimationRef.current = null;
        };
    }, [open])


    useGSAP(() => {
        const subRouteDiv = subRouteDivRef.current;
        const routeDiv = routeDivRef?.current;
        if (!subRouteDiv || !routeDiv) return;

        // Kill existing animation
        if (subRouteAnimRef.current) {
            subRouteAnimRef.current.kill();
            subRouteAnimRef.current = null;
        }

        const tl = gsap.timeline();

        if (openSubRoutes !== null) {
            subRouteDiv.classList.remove("pointer-events-none");

            tl.to(routeDiv, {
                x: -20,
                opacity: 0,
                duration: 0.3,
            }).fromTo(subRouteDiv,
                { x: 20 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                }
            );
        } else {
            tl.to(subRouteDiv, {
                x: 20,
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    subRouteDiv.classList.add("pointer-events-none");
                },
            }).to(routeDiv, {
                x: 0,
                opacity: 1,
                duration: 0.5,
            });
        }

        subRouteAnimRef.current = tl;

        return () => {
            tl.kill();
            subRouteAnimRef.current = null;
        };
    }, [openSubRoutes]);

    const activeRoute = useMemo(() => {
        return ROUTES.find((route) => route.name === openSubRoutes);
    }, [openSubRoutes]);

    useGSAP(() => {
        // Animate in all route buttons with a stagger
        gsap.from(routeElemsRef.current, {
            y: -10,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out',
            stagger: 0.03
        })
    }, [open])

    useEffect(() => {
        console.log("useEffect running"); // debug
        if (typeof window === "undefined") return; //ssr safe


        if (window.innerWidth <= 1024) {
            document.body.style.overflow = open ? 'hidden' : 'auto'
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };

    }, [open]);


    return (
        <div ref={translucentDivRef} className="w-full backdrop-blur-4xl h-dvh bg-background/60 absolute z-10 opacity-0">
            <div ref={opaqueDivRef} onMouseLeave={() => isMobile ? null : setOpen(null)} className="w-full bg-background fixed z-10 flex items-start justify-center overflow-hidden">
                {/** Search Bar */}
                {
                    open === 'search' && (
                        <div ref={bgDivRef} className="lg:w-full lg:max-w-244 w-[77%]">
                            <div className="w-full flex items-center gap-2 h-14 mb-4">
                                <ImagoSymbol className="text-[#707070]" name="search" size="30px" />
                                <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} type="text" className='flex-1 border-none outline-none placeholder:text-2xl placeholder:font-semibold text-2xl font-semibold  bg-transparent' placeholder='Search imago' />
                                {/** Close Button */}
                                <button
                                    onClick={() => setQuery("")}
                                    className={cn(
                                        "p-1 rounded-full bg-black/20 flex-center cursor-pointer",
                                        query.length === 0 && "hidden"
                                    )}>
                                    <ImagoSymbol name="xmark" size="12px" className="" styles={{ fontWeight: 800 }} />
                                </button>
                            </div>
                            {
                                query.length > 0 && (
                                    <p>{query} not found</p>
                                )
                            }
                        </div>
                    )
                }

                {/** Account Center */}
                {
                    open === 'account' && (
                        <div ref={bgDivRef} className="lg:w-full lg:max-w-244 w-[77%]">
                            <div className="w-full flex items-center gap-2 h-14 mb-4">
                                <ImagoSymbol className="text-[#707070]" name="person_crop_circle" size="30px" />
                                <p className='flex-1 border-none outline-none placeholder:text-2xl placeholder:font-semibold text-2xl font-semibold  bg-transparent'>Account</p>
                            </div>
                        </div>
                    )
                }

                {/** Menu */}
                {
                    open === 'menu' && (
                        <div ref={bgDivRef} className='flex flex-col items-start gap-4 w-full h-full relative'>
                            <div ref={routeDivRef} className='flex flex-col items-start gap-4 px-12 py-6 h-full w-full '>
                                {
                                    ROUTES.map((route, index) => (
                                        <button
                                            key={index}
                                            ref={(el) => {
                                                if (el) {
                                                    routeElemsRef.current[index] = el
                                                }
                                            }}
                                            onClick={() => handleMobileRouteClick(route.name)}
                                            aria-label={`Navigate to ${route.name}`}
                                            className='font-semibold text-3xl'>
                                            {route.name}
                                        </button>
                                    ))
                                }
                            </div>

                            <div ref={subRouteDivRef} className={cn('absolute w-full h-full flex flex-col items-start gap-2.5 px-12 py-6 opacity-0 bg-white font-semibold text-2xl pointer-events-none')}>
                                <p className='text-[1rem] text-muted-foreground'>{`${activeRoute?.name} Routes`}</p>
                                <Link href={activeRoute?.path ?? "/"} className='text-3xl'>{`Explore ${activeRoute?.name}`}</Link>
                                {activeRoute?.children?.map((subRoute) => (
                                    <Link key={subRoute.path} href={subRoute.path}>
                                        {subRoute.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                }


                {/** Hover Menus */}
                {
                    currentNav?.data && (
                        <div ref={bgDivRef} className="lg:w-full lg:max-w-244 w-[77%] flex flex-col gap-2">
                            <p className={cn('text-muted-foreground text-sm')}>{currentNav.label}</p>
                            <Link
                                // ref={currentNav?.refs(1)}
                                href={currentNav.data?.path}
                                className={cn('text-3xl font-semibold')}
                            >
                                {`Explore ${currentNav?.data?.name}`}
                            </Link>
                            {/* <div className="flex flex-col gap-1 mt-2"> */}
                            {currentNav.data?.children?.map((route, i) => (
                                <Link
                                    // ref={currentNav?.refs(i + 2)} 
                                    href={route.path ?? '/'}
                                    className={cn('font-semibold text-2xl')}
                                    key={route.name}
                                >
                                    {route.name}
                                </Link>
                            ))}
                            {/* </div> */}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default ExpandedNavbar