"use client";

import ImagoIcon from "@/components/icons/ImagoIcon";
import ImagoSymbol from "@/components/icons/ImagoSymbol";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

// This is sample data.
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "Getting Started",
            url: "#",
            items: [
                {
                    title: "Installation",
                    url: "#",
                },
                {
                    title: "Project Structure",
                    url: "#",
                },
            ],
        },
        {
            title: "Building Your Application",
            url: "#",
            items: [
                {
                    title: "Routing",
                    url: "#",
                },
                {
                    title: "Data Fetching",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Rendering",
                    url: "#",
                },
                {
                    title: "Caching",
                    url: "#",
                },
                {
                    title: "Styling",
                    url: "#",
                },
                {
                    title: "Optimizing",
                    url: "#",
                },
                {
                    title: "Configuring",
                    url: "#",
                },
                {
                    title: "Testing",
                    url: "#",
                },
                {
                    title: "Authentication",
                    url: "#",
                },
                {
                    title: "Deploying",
                    url: "#",
                },
                {
                    title: "Upgrading",
                    url: "#",
                },
                {
                    title: "Examples",
                    url: "#",
                },
            ],
        },
        {
            title: "API Reference",
            url: "#",
            items: [
                {
                    title: "Components",
                    url: "#",
                },
                {
                    title: "File Conventions",
                    url: "#",
                },
                {
                    title: "Functions",
                    url: "#",
                },
                {
                    title: "next.config.js Options",
                    url: "#",
                },
                {
                    title: "CLI",
                    url: "#",
                },
                {
                    title: "Edge Runtime",
                    url: "#",
                },
            ],
        },
        {
            title: "Architecture",
            url: "#",
            items: [
                {
                    title: "Accessibility",
                    url: "#",
                },
                {
                    title: "Fast Refresh",
                    url: "#",
                },
                {
                    title: "Next.js Compiler",
                    url: "#",
                },
                {
                    title: "Supported Browsers",
                    url: "#",
                },
                {
                    title: "Turbopack",
                    url: "#",
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user } = useUser()
    return (
        <Sidebar collapsible="offcanvas" {...props} className="h-screen border-none bg-white rounded-2xl ">
            <div className="h-full overflow-y-auto bg-black/12 rounded-2xl  p-1 flex flex-col border border-black/30">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem >
                            <SidebarMenuButton size={'lg'} className="flex items-center justify-between px-2">
                                <Link href={'/'}>
                                    <ImagoIcon size={18} />
                                </Link>
                                <button className="cursor-pointer">
                                    <ImagoSymbol name="sidebar_left" size="19px" />
                                </button>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent className="no-scrollbar">
                    {/* We create a SidebarGroup for each parent. */}
                    {data.navMain.map((item) => (
                        <SidebarGroup key={item.title}>
                            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild isActive={item.isActive}>
                                                <a href={item.url}>{item.title}</a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))}
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenuButton size={'lg'}>
                        <Avatar>
                            <AvatarImage src={user?.imageUrl} />
                            <AvatarFallback>{user?.firstName}</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">{user?.fullName}</span>
                            <span className="truncate text-xs">{user?.emailAddresses[0]?.emailAddress}</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarFooter>
            </div>
        </Sidebar>
    )
}
