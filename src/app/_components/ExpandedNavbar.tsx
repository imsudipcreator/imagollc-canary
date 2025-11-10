import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react"
import { useNavbar } from "../_contexts/NavbarContext";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/use-mobile";
import ImagoSymbol from "@/components/icons/ImagoSymbol";

const ExpandedNavbar = () => {
    const isMobile = useIsMobile()
    const { open, setOpen } = useNavbar()
    const [query, setQuery] = useState("")
    const translucentDivRef = useRef<HTMLDivElement>(null);
    const opaqueDivRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const bgDivRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });
        const translucentDiv = translucentDivRef.current;
        const opaqueDiv = opaqueDivRef.current;
        const bgDiv = bgDivRef.current

        if (!translucentDiv || !opaqueDiv) return

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
    }, [open])


    // useEffect(() => {

    // })
    return (
        <div ref={translucentDivRef} className="w-full backdrop-blur-4xl h-dvh bg-background/60 absolute z-10 opacity-0">
            <div ref={opaqueDivRef} onMouseLeave={() => setOpen(null)} className="w-full bg-background fixed z-10 flex items-start justify-center overflow-hidden">
                {/** Search Bar */}
                {
                    open === 'search' && (
                        <div ref={bgDivRef} className="lg:w-full lg:max-w-244 w-[77%]">
                            <div className="w-full flex items-center gap-2 h-14 mb-4">
                                <ImagoSymbol className="text-[#707070]" name="search" size="30px" />
                                <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} type="text" className='h-full w-full border-none outline-none placeholder:text-2xl placeholder:font-semibold text-2xl font-semibold  bg-transparent' placeholder='Search imago' />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default ExpandedNavbar