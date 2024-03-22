import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Home page",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
                    <Link class="text-3xl font-bold leading-none" href="/">
                        <p className="text-black text-2xl font-bold">Logo</p>
                    </Link>
                    <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                        <li>
                            <Link
                                class="text-sm text-gray-400 hover:text-gray-500"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li class="text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                class="w-4 h-4 current-fill"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                            </svg>
                        </li>
                        <li>
                            <Link
                                className="text-sm text-gray-400 hover:text-gray-500"
                                href="/about"
                            >
                                About Us
                            </Link>
                        </li>
                        <li class="text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                class="w-4 h-4 current-fill"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                            </svg>
                        </li>
                        <li>
                            <Link
                                class="text-sm text-gray-400 hover:text-gray-500"
                                href="/services"
                            >
                                Services
                            </Link>
                        </li>
                        <li class="text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                class="w-4 h-4 current-fill"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                            </svg>
                        </li>
                        <li>
                            <Link
                                class="text-sm text-gray-400 hover:text-gray-500"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <a
                        class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                        href="#"
                    >
                        Sign In
                    </a>
                    <a
                        class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                        href="#"
                    >
                        Sign up
                    </a>
                </nav>
                {children}
            </body>
        </html>
    );
}
