import React from "react";
export const metadata = {
    title: "Home page",
};
const Home = () => {
    return (
        <div>
            <p>Home Page</p>
        </div>
    );
};

export default Home;
// Main difference between template and layout is:
// Template re-renders after every update or every navigation on the other hand layout doesn't
