import React from "react";
import { blogs } from "../data/blogs";
import BlogItem from "../components/BlogItem";
import Link from "next/link";

const Blogs = () => {
    return (
        <div>
            <div className="p-8">
                <h1 className="text-xl font-bold">Blog list</h1>
                <div className="mt-6 p-4">
                    {blogs.map((blog) => (
                        <Link key={blog.id} href={`/blogs/${blog?.id}`}>
                            <BlogItem blog={blog} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
