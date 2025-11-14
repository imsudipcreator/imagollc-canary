import { SidebarProvider } from "@/components/ui/sidebar";
import AppNavbar from "./_components/AppNavbar";
import { AppSidebar } from "./_components/AppSidebar";

export default function IntelligenceChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black">
            <SidebarProvider>
                <AppSidebar />
                <main className="flex-1 flex flex-col items-center justify-center ">
                    <AppNavbar />
                    {children}
                </main>
            </SidebarProvider>
        </div>
    )
}