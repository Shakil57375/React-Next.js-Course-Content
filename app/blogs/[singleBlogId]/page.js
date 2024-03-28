import { blogs } from "@/app/data/blogs";

export function generateStaticParams() {
    // params [{singleBlogId : 1,}, {singleBlogId : 2}]
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

const SingleBlog = ({ params }) => {
    const { singleBlogId } = params;
    const id = parseInt(singleBlogId);
    const blog = blogs.find((blog) => blog.id === id);
    const { title, description } = blog;
    return (
        <div className="p-8">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm font-normal mt-4">{description}</p>
        </div>
    );
};

export default SingleBlog;
