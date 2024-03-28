import React from "react";

const BlogItem = ({ blog }) => {
    return (
        <div>
            <p className="mt-4">{blog?.title}</p>
        </div>
    );
};

export default BlogItem;
