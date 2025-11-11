import ImagoSymbol from "@/components/icons/ImagoSymbol"
import Link from "next/link"

/**
 * A Next.js page that displays a 404 error message to the user.
 *
 * The page displays a heading that says "The page you're looking for can't be found."
 * Below the heading, it displays a link to the sitemap that says "See the sitemap"
 * with a chevron right icon on the right side.
 *
 * @returns A JSX element representing the 404 error page.
 */
const NotFound = () => {
    return (
        <div className='min-h-[500px]  w-full flex flex-col items-center justify-center gap-4'>
            <h1 className='font-semibold text-3xl w-80 text-center'>The page you&apos;re looking for can&apos;t be found.</h1>
            <Link href={'/sitemap'} className='group text-primary flex items-center gap-1'>
                <button className='group-hover:underline'>See the sitemap</button>
                <ImagoSymbol name='chevron_right' size='10px' />
            </Link>
        </div>
    )
}
export default NotFound