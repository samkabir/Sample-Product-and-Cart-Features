'use client';

import GetIcon from "@/utils/GetIcon";
import { usePathname } from "next/navigation";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const BreadCrumbs = () => {
    const pathname = usePathname();
    const pathArr = pathname.split("/").filter(Boolean);

    const crumbs = [
        "Home",
        ...pathArr.map(segment => capitalize(segment.replace(/-/g, " "))),
    ];

    return (
        <div className="grid grid-cols-12 gap-0 bg-[#f1f5f9] text-black">
            <div className="col-start-2 col-end-12 w-full">
                <header className="h-[40px] flex items-center w-full ">
                    <nav className="container mx-auto px-4 py-4 block text-sm flex justify-between items-center w-full" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2">
                            {crumbs.map((name, idx) => (
                                <li key={idx} className="flex items-center text-black">
                                    {idx > 0 && <span className="mx-1"> <GetIcon name="ArrowRightIcon" className="w-6 h-6 text-grey" /></span>}
                                    {idx < crumbs.length - 1 ? (
                                        <div className="text-black">
                                            {name}
                                        </div>
                                    ) : (
                                        <span className="text-gray-600 ">{name}</span>
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
