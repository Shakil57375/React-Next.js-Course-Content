"use client"
import { useRouter } from "next/navigation";

const Button = ({ children, className }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/about");
    };
    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    );
};

export default Button;
