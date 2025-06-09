'use client';

import { Oi } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {NavbarSidebar} from "@/app/(home)/navbar-sidebar";
import {useState} from "react";
import {MenuIcon} from "lucide-react";

const oi = Oi({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-oi",
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const navbarItems: NavbarItemProps[] = [
    { href: "/", children: "Home", isActive: true },
    { href: "/about", children: "About" },
    { href: "/features", children: "Features" },
    { href: "/pricing", children: "Pricing" },
    { href: "/contact", children: "Contact" },
]

const NavbarItem = ({ href, isActive, children} : NavbarItemProps) => {
    return (
        <Button
            variant="ghost"
            className={cn(
                "font-semibold bg-gradient-to-b from-primary/10 to-transparent hover:bg-gradient-to-b hover:from-primary hover:to-primary/10 cursor-pointer transition-colors",
                isActive ? "text-white bg-[#050517] hover:bg-[#050517] hover:text-white" : "text-black",
            )}
            asChild
        >
            <Link
                href={href}
            >
                {children}
            </Link>
        </Button>
    )
}

export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen ] = useState(false);
    return (
        <nav
            className="fixed top-0 left-0 right-0 h-24 flex items-center justify-between px-4 bg-gradient-to-b from-primary via-primary/50 to-primary/10 text-white z-50"
        >
            <Link
                href={"/"}
                className={`text-2xl font-semibold ${oi.className} flex items-center`}
            >
                <span className={
                    cn(`text-2xl font-semibold text-neutral-900`, oi.className)
                }>HANOUT</span>
            </Link>

            <div
                className="items-center gap-4 hidden lg:flex"
            >
                {
                    navbarItems.map((item, i) => (
                        <NavbarItem
                            key={i}
                            href={item.href}
                            isActive={pathname === item.href}
                        >
                            {item.children}
                        </NavbarItem>
                    ))
                }
            </div>
            <NavbarSidebar
                item={navbarItems}
                open={isSidebarOpen}
                onOpen={setIsSidebarOpen}
            />
            <div
                className="hidden lg:flex items-center gap-2"
            >
                <Button
                    variant="default"
                    className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer"
                    asChild
                >
                    <Link
                        href={`/sign-in`}
                    >
                        Sign In
                    </Link>

                </Button>
                <Button variant="outline" className="text-neutral-900 hover:bg-neutral-100 cursor-pointer" asChild>
                    <Link
                        href={`/sign-up`}
                    >
                        Start Selling
                    </Link>
                </Button>
            </div>

            <div className="lg:hidden">
                <Button
                    variant="outline"
                    className="text-black hover:bg-transparent focus:bg-transparent active:bg-transparent cursor-pointer"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <MenuIcon size="24" />
                </Button>
            </div>
        </nav>
    )
};