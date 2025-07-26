import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;
    console.log(post)
    return (
        <div className="text-center w-3/6 mx-auto mt-4 bg-amber-200 p-4 border-2 border-amber-500 rounded-xl">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mb-6">{body}</p>
            <Link className="border-2 border-orange-500 px-4 py-2 rounded-xl bg-amber-400 font-bold"  to="/posts">Go back to posts page</Link>
        </div>
    );
};

export default PostDetails;