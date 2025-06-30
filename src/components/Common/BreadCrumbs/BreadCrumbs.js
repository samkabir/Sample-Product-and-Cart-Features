'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const BreadCrumbs = () => {
    const pathname = usePathname();
    const pathArr = pathname.split("/").filter(Boolean);

    // Build breadcrumb items
    const crumbs = [
        { name: "Home", href: "/" },
        ...pathArr.map((segment, idx) => ({
            name: capitalize(segment.replace(/-/g, " ")),
            href: "/" + pathArr.slice(0, idx + 1).join("/"),
        })),
    ];

    return (
        <div className="grid grid-cols-12 gap-0 bg-[#f1f5f9] text-black">
            <div className="col-start-2 col-end-12 w-full">
                <header className="h-[40px] flex items-center w-full ">
                    <nav className="container mx-auto px-4 py-4 hidden md:block text-sm flex justify-between items-center w-full" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2">
                            {crumbs.map((crumb, idx) => (
                                <li key={crumb.href} className="flex items-center">
                                    {idx > 0 && <span className="mx-1">{'>'}</span>}
                                    {idx < crumbs.length - 1 ? (
                                        <Link href={crumb.href} className="text-blue-600 hover:underline">
                                            {crumb.name}
                                        </Link>
                                    ) : (
                                        <span className="text-gray-500">{crumb.name}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </header>
            </div>
        </div>


    );
};

export default BreadCrumbs;
