import Link from "next/link";
import React from "react";

const AboutPageLayout = ({ children }) => {
    return (
        <>
            <nav class="border-gray-200">
                <div class="container mx-auto flex flex-wrap items-center justify-between">
                    <div
                        class="hidden md:block w-full md:w-auto"
                        id="mobile-menu"
                    >
                        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link
                                    href="/about"
                                    class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about/aboutOne"
                                    class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                                >
                                    About one
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about/aboutTwo"
                                    class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                                >
                                    About Two
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about/aboutThree"
                                    class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                                >
                                    About Three
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
};

export default AboutPageLayout;
