import Link from "next/link";
import React from "react";
import CustomLink from "../components/CustomLink";

const AboutPageLayout = ({ children }) => {
    return (
        <>
            <nav className="border-gray-200">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div
                        className="hidden md:block w-full md:w-auto"
                        id="mobile-menu"
                    >
                        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <CustomLink
                                    path={"/about"}
                                    className={
                                        " md:bg-transparent block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none"
                                    }
                                >
                                    Home
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink
                                    path={"/aboutOne"}
                                    className={
                                        "  border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0"
                                    }
                                >
                                    About one
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink
                                    path={"/aboutTwo"}
                                    className={
                                        "  border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0"
                                    }
                                >
                                    About Two
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink
                                    path={"/aboutThree"}
                                    className={
                                        "  border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover: md:p-0"
                                    }
                                >
                                    About Three
                                </CustomLink>
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
