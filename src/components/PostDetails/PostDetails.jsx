import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;
    console.log(post)
    return (
        <div className="text-center w-3/6 mx-auto mt-4 bg-amber-200 p-4 border-2 border-amber-500 rounded-xl">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{body}</p>
            <Link to="/posts">Go back to posts page</Link>
        </div>
    );
};

export default PostDetails;