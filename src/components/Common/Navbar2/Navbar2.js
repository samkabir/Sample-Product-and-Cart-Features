"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GetIcon from "@/utils/GetIcon";
import Image from "next/image";
import ShopIcon from "@/icons/AnimatedIcons/ShopIcon.gif"; 
import { getCategory } from "@/api/getCategory";

const Navbar2 = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleMobileDropdown = () => {
        setMobileDropdownOpen(!mobileDropdownOpen);
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategory();
            if (response.success) {
                setCategories(response.data.data);
            } else {
                console.log('Failed to fetch categories:', response.message);
            }
        } catch (error) {
            console.log('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        setMenuOpen(false);
        setMobileDropdownOpen(false);
        setDropdownOpen(false);
        fetchCategories();
    }, [pathname]);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
        setHoveredCategory(null);
    };

    const handleCategoryHover = (categoryId) => {
        setHoveredCategory(categoryId);
    };

    return (
        <div className="grid grid-cols-12 gap-0 bg-[#fff] shadow-md text-black relative top-0 z-[1]">
            <div className="col-start-2 col-end-12 w-full">
                <header className="h-[40px] flex items-center w-full ">
                    <nav className="container mx-auto px-4 py-4 flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                            {/* Desktop Categories with Dropdown */}
                            <div 
                                className="relative hidden md:block"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="flex gap-2 items-center border-r-2 border-gray-300 pr-6 cursor-pointer">
                                    <GetIcon name={"HamburgerIcon"} className="w-5 h-5 text-green" />
                                    Categories
                                    <GetIcon name={"ChevronDownIcon"} className="w-4 h-4 text-gray-500" />
                                </div>

                                {/* Desktop Dropdown */}
                                {dropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-lg min-w-[800px] z-50">
                                        <div className="flex">
                                            {/* Categories List */}
                                            <div className="w-1/3 border-r">
                                                {categories.map((category) => (
                                                    <div
                                                        key={category.id}
                                                        className={`p-3 hover:bg-gray-50 cursor-pointer border-b ${
                                                            hoveredCategory === category.id ? 'bg-gray-50' : ''
                                                        }`}
                                                        onMouseEnter={() => handleCategoryHover(category.id)}
                                                    >
                                                        <Link 
                                                            href={`/category/${category.slug}`}
                                                            className="flex items-center gap-2"
                                                        >
                                                            {category.image && (
                                                                <img 
                                                                    src={category.image} 
                                                                    alt={category.name}
                                                                    className="w-8 h-8 object-cover rounded"
                                                                />
                                                            )}
                                                            <span className="text-sm font-medium">{category.name}</span>
                                                            <GetIcon name="ChevronRightIcon" className="w-4 h-4 text-gray-400 ml-auto" />
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Subcategories */}
                                            <div className="w-2/3 p-4">
                                                {hoveredCategory && (
                                                    <div className="grid grid-cols-2 gap-6">
                                                        {categories
                                                            .find(cat => cat.id === hoveredCategory)
                                                            ?.subcategories?.map((subcategory) => (
                                                                <div key={subcategory.id} className="mb-4">
                                                                    <Link 
                                                                        href={`/category/${subcategory.slug}`}
                                                                        className="font-semibold text-sm text-gray-800 hover:text-green-600 mb-2 block"
                                                                    >
                                                                        {subcategory.name}
                                                                    </Link>
                                                                    {subcategory.subchilds && (
                                                                        <ul className="space-y-1">
                                                                            {subcategory.subchilds.slice(0, 6).map((subchild) => (
                                                                                <li key={subchild.id}>
                                                                                    <Link 
                                                                                        href={`/category/${subchild.slug}`}
                                                                                        className="text-xs text-gray-600 hover:text-green-600"
                                                                                    >
                                                                                        {subchild.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            ))}
                                                    </div>
                                                )}
                                                {!hoveredCategory && (
                                                    <div className="text-gray-500 text-center py-8">
                                                        Hover over a category to see subcategories
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Categories Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={toggleMobileDropdown}
                                    className="flex gap-2 items-center border-r-2 border-gray-300 pr-6  text-sm"
                                >
                                    <GetIcon name={"HamburgerIcon"} className="w-5 h-5 text-green " />
                                    Categories
                                    <GetIcon name={mobileDropdownOpen ? "ChevronUpIcon" : "ChevronDownIcon"} className="w-4 h-4 text-gray-500" />
                                </button>
                            </div>

                            <div className="flex items-center hidden md:flex">
                                <ul className="flex gap-4 text-darkGrey  text-sm">
                                    <li>Electronics</li>
                                    <li>Fashion</li>
                                    <li>Home & Garden</li>
                                    <li>Sports & Outdoors</li>
                                    <li>Health & Beauty</li>
                                </ul>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="flex gap-3">
                            <div className="flex items-center hidden md:flex">
                                <ul className="flex gap-4 uppercase text-grey">
                                    <li className="flex items-center gap-2  text-xs">
                                        <GetIcon name="PackageIcon" className="text-grey" />
                                        track Order
                                    </li>
                                    <li className="flex items-center gap-2  text-xs">
                                        <GetIcon name="HeadsetIcon" className="text-grey" />
                                        help center
                                    </li>
                                    <li className="flex items-center gap-2  text-xs">
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

                    {/* Mobile Categories Dropdown */}
                    {mobileDropdownOpen && (
                        <div className="md:hidden bg-white shadow-lg border-t absolute left-0 right-0 top-full z-50 max-h-96 overflow-y-auto">
                            <div className="p-4">
                                {categories.map((category) => (
                                    <div key={category.id} className="mb-4">
                                        <Link 
                                            href={`/category/${category.slug}`}
                                            className="flex items-center gap-2 font-semibold text-gray-800 mb-2"
                                            onClick={() => setMobileDropdownOpen(false)}
                                        >
                                            {category.image && (
                                                <img 
                                                    src={category.image} 
                                                    alt={category.name}
                                                    className="w-6 h-6 object-cover rounded"
                                                />
                                            )}
                                            {category.name}
                                        </Link>
                                        {category.subcategories && (
                                            <div className="ml-4 grid grid-cols-1 gap-2">
                                                {category.subcategories.map((subcategory) => (
                                                    <div key={subcategory.id}>
                                                        <Link 
                                                            href={`/category/${subcategory.slug}`}
                                                            className="text-sm text-gray-600 hover:text-green-600 block"
                                                            onClick={() => setMobileDropdownOpen(false)}
                                                        >
                                                            {subcategory.name}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden bg-[#19192a] shadow-lg font-bold min-h-min absolute inset-0 mt-20 z-[99] overflow-auto">
                            <ul className="p-4 space-y-4">
                                <li className="flex items-center gap-2 text-white">
                                    <GetIcon name="PackageIcon" className="text-grey" />
                                    track Order
                                </li>
                                <li className="flex items-center gap-2 text-white">
                                    <GetIcon name="HeadsetIcon" className="text-grey" />
                                    help center
                                </li>
                                <li className="flex items-center gap-2 text-white">
                                    <Image src={ShopIcon} width={25} height={25} alt="ShopIcon" />
                                    Sell with us
                                </li>
                            </ul>
                        </div>
                    )}
                </header>
            </div>
        </div>
    );
};

export default Navbar2;