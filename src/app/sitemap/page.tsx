import { NAVIGATION_SECTIONS } from "@/constants/routes"
import Link from "next/link"

const SiteMap = () => {
    return (
        <main className="lg:max-w-244 w-[88%] flex flex-col items-center justify-center mx-auto py-12 space-y-8 ">
            <h1 className="text-2xl font-semibold self-start w-full border-b border-border pb-3.5">Imago Sitemap</h1>

            <div className="w-full grid grid-cols-2 space-y-7">
                {NAVIGATION_SECTIONS.map(section => (
                    <section className="" key={section.name}>
                        <h2 className="text-xl font-semibold mb-4">{section.name}</h2>
                        <ul className="grid grid-cols-1 gap-2 text-primary">
                            {section.routes.map(link => (
                                <li className="hover:underline" key={link.path}>
                                    <Link href={link.path}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

        </main>
    )
}
export default SiteMap