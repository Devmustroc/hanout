import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";
import {Button} from "@/components/ui/button";

interface navbarItems {
    href: string;
    children: React.ReactNode;
}

interface LinkProps {
    item: navbarItems[];
    open: boolean;
    onOpen: (open: boolean) => void;
}

export const NavbarSidebar = ({ item, open, onOpen }: LinkProps) => {
    return (
        <Sheet
            open={open}
            onOpenChange={onOpen}
        >
            <SheetContent
                side={"left"}
                className="p-0 transform-none"
            >
                <SheetHeader
                    className="h-20 p-4 bg-gradient-to-b from-primary via-primary/50 to-primary/10 text-white flex items-center justify-between"
                >
                    <div
                        className="flex items-center"
                    >
                        <SheetTitle className="text-lg font-semibold">
                            HANOUT
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea
                    className="flex flex-col overflow-y-auto h-full pb-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                >
                    <div className="flex flex-col gap-2">
                        {item.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-base text-black hover:text-black transition-colors duration-200 hover:bg-primary hover:bg-opacity-10 px-4 py-2"
                                onClick={() => onOpen(false)} // Close sidebar on link click
                            >
                                {link.children}
                            </Link>
                        ))}
                        <div
                            className="border-t border-gray-200 mt-2 pt-2 text-center text-sm text-gray-500"
                        >
                            <Button
                                variant="outline"
                                className="w-full bg-primary hover:bg-primary/90 text-white transition-colors duration-200 rounded-none cursor-pointer"
                                onClick={() => onOpen(false)}
                            >
                                <Link href="/sign-in" className="text-white">
                                    Sign In
                                </Link>
                            </Button>
                            <Button
                                variant="default"
                                className="w-full mt-2 bg-neutral-900 hover:bg-neutral-800 text-white transition-colors duration-200 rounded-none cursor-pointer"
                                onClick={() => onOpen(false)}
                            >
                                <Link href="/sign-up" className="text-white">
                                    Start Selling
                                </Link>
                            </Button>
                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}