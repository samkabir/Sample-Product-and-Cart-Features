"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GetIcon from "@/utils/GetIcon";
import Image from "next/image";
import ShopIcon from "@/icons/AnimatedIcons/ShopIcon.gif"; 

const Navbar2 = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <div className="grid grid-cols-12 gap-0 bg-[#fff] shadow-md text-black relative top-0 z-[1]">
            <div className="col-start-2 col-end-12 w-full">
                <header className="h-[40px] flex items-center w-full ">
                    <nav className="container mx-auto px-4 py-4 flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2 items-cente border-r-2 border-gray-300 pr-6">
                                <GetIcon name={"HamburgerIcon"} className="w-5 h-5 text-green" />
                                Categories
                            </div>
                            <div className="flex items-center hidden md:flex">
                                <ul className="flex gap-4 text-darkGrey">
                                    <li>
                                        Electronics
                                    </li>
                                    <li>
                                        Fashion
                                    </li>
                                    <li>
                                        Home & Garden
                                    </li>
                                    <li>
                                        Sports & Outdoors
                                    </li>
                                    <li>
                                        Health & Beauty
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        
                        <div className=" flex gap-3">
                            <div className="flex items-center hidden md:flex">
                                <ul className="flex  gap-4 uppercase text-grey">
                                    <li className="flex items-center gap-2">
                                        <GetIcon name="PackageIcon" className="  text-grey" />
                                        track Order
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <GetIcon name="HeadsetIcon" className="  text-grey" />
                                        help center
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src={ShopIcon} className="" width={25} height={25} alt="ShopIcon" />
                                        Sell with us
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button onClick={toggleMenu} className="md:hidden">
                            <GetIcon name={menuOpen ? "CrossIcon" : "HamburgerIcon"} className="w-5 h-5 text-red-500" />
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden bg-[#19192a] shadow-lg font-bold min-h-min absolute inset-0 mt-20 z-[99] overflow-auto">
                            <ul className="p-4 space-y-4">
                                
                            </ul>
                        </div>
                    )}
                </header>
            </div>
        </div>
    );
};

export default Navbar2;
