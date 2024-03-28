"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children, className }) => {
    const pathName = usePathname();
    const active = pathName === path;
    return (
        <Link
            href={path}
            className={`${className} ${
                active ? "text-blue-700" : "text-black"
            }`}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
