const fetchPosts = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
    return "Here are my posts";
};

const Posts = async () => {
    const posts = await fetchPosts();
    return <div>{posts}</div>;
};

export default Posts;
