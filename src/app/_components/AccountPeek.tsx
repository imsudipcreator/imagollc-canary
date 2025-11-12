
import ImagoSymbol from "@/components/icons/ImagoSymbol"
import { useUser } from "@clerk/nextjs"
import { forwardRef } from "react"

const AccountPeek = forwardRef<HTMLDivElement>((_, ref) => {
    const { isLoaded, isSignedIn, user } = useUser()
    if (!isLoaded || !isSignedIn || !user) {
        return (
            <div ref={ref} className="lg:w-full lg:max-w-244 w-[77%]">
                <h1>{"You aren't signed in"}</h1>
            </div>
        )
    }

    return (
        <div ref={ref} className="lg:w-full lg:max-w-244 w-[77%]">
            <div className="w-full flex items-center gap-2 h-14 ">
                <ImagoSymbol className="text-[#707070]" name="person_crop_circle" size="30px" />
                <p className='flex-1 border-none outline-none placeholder:text-2xl placeholder:font-semibold text-2xl font-semibold  bg-transparent'>Account</p>
            </div>
            <p>{user.emailAddresses[0]?.emailAddress}</p>
        </div>
    )
})

AccountPeek.displayName = "AccountPeek"
export default AccountPeek