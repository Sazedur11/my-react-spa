import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {title, id} = post;
    return (
        <div className="border-3 border-orange-300 rounded-xl bg-amber-200 p-4 text-center flex flex-col justify-between">
            <h2 className="text-xl font-semibold">Id: {id}</h2>
            <h2 className="text-2xl font-bold mb-4">Title: {title}</h2>
            <Link className="border-2 border-orange-300 px-4 py-2 rounded-xl bg-amber-400 font-bold" to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;