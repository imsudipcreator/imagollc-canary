import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter()
    return (
        <header className="w-full flex items-center justify-center sticky top-0 bg-background/60 backdrop-blur-2xl z-50">
            <nav className="h-12 max-w-244 not-md:w-[92%] w-full flex items-center justify-between border-b border-black/30">
                <h1 className="font-semibold text-xl">Imago Intelligence</h1>
                <Button onClick={() => router.push("/intelligence/chat")} variant={'imago'} className="h-7">
                    Try now
                </Button>
            </nav>
        </header>
    )
}
export default Navbar