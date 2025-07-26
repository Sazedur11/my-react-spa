import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title, id} = post;

    const navigate = useNavigate();

    const handlePostDetails = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div className="border-3 border-orange-300 rounded-xl bg-amber-200 p-4 text-center flex flex-col justify-between">
            <h2 className="text-xl text-gray-600 font-semibold">Id: {id}</h2>
            <h2 className="text-2xl text-gray-600 font-bold mb-4">Title: {title}</h2>
            <Link className="text-gray-700 border-2 border-orange-300 px-4 py-2 rounded-xl bg-amber-400 font-bold" to={`/post/${id}`}>Post Details</Link>
            <button className="text-gray-700 font-bold border-2 border-amber-600 rounded-xl bg-amber-400 py-2 mt-2" onClick={handlePostDetails}>Post Details 2</button>
        </div>
    );
};

export default Post;