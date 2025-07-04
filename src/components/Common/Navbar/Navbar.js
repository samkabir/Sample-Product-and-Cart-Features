"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GetIcon from "@/utils/GetIcon";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
    const { totalItems  } = useCart();

    return (
        <div className="grid grid-cols-12 gap-0 bg-[#19192a] shadow-md text-white">
            <div className="col-start-2 col-end-12 w-full">
                <header className="h-[130px] md:h-[80px] md:flex items-center w-full">
                    <nav className="container mx-auto px-4 py-4 flex justify-between items-center w-full">
                        {/* Logo */}
                        <div >
                            <Link href="/" className="flex gap-2 items-center">
                                <GetIcon name={"LogoIcon"} className={""} />
                                <span className="text-2xl font-bold">FALCON</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}

                        <div className="flex items-center hidden md:flex">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="lg:min-w-[763px] h-[48px] px-4 rounded-lg bg-[#2c2c3a]  rounded-l-xs rounded-r-none bg-white"
                            />
                            <div className="flex items-center bg-green h-[48px] w-[48px] justify-center rounded-r-lg">
                                <GetIcon name={"SearchIcon"} className={""} />
                            </div>
                        </div>
                        
                        <div className=" flex gap-3">
                            <Link href="/cart" className="relative">
                              
                                    <span className="absolute -top-1 -right-1 bg-bloodRed text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                               
                                <GetIcon name={"CartIcon"} className={"w-[32px] h-[32px]"} />
                            </Link>
                            <GetIcon name={"UserIcon"} className={"w-[32px] h-[32px"} />
                        </div>



                    </nav>

                    <div className="flex items-center md:hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="lg:min-w-[763px] h-[48px] px-4 rounded-lg bg-[#2c2c3a]  rounded-l-xs rounded-r-none bg-white"
                        />
                        <div className="flex items-center bg-green h-[48px] w-[48px] justify-center rounded-r-lg">
                            <GetIcon name={"SearchIcon"} className={""} />
                        </div>
                    </div>

                </header>
            </div>

        </div>
    );
};

export default Navbar;
