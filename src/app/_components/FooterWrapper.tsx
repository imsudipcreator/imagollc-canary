'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

const FooterWrapper = () => {
    const pathname = usePathname()
    const footerExcludedRoutes = ['/community', '/developer/icreator', '/intelligence/chat', '/sign-in', '/sign-up', '/labs/nsfw']
    const shouldHideFooter = footerExcludedRoutes.some((route) => pathname.startsWith(route))

    if (shouldHideFooter) {
        return null
    }
    return (
        <Footer />
    )
}

export default FooterWrapper