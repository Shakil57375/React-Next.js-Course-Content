import React from "react";
import Button from "./components/Button";
import SortProducts from "./components/SortProducts";
export const metadata = {
    title: "Home page",
};
const Home = () => {
    return (
        <div>
            <p>Home Page</p>
            <Button className={"bg-blue-600 px-6 py-3 w-fit h-fit rounded-lg"}>
                Go to about page
            </Button>
            <SortProducts />
        </div>
    );
};

export default Home;
// Main difference between template and layout is:
// Template re-renders after every update or every navigation on the other hand layout doesn't
