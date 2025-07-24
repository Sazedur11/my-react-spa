import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h2 className="text-xl font-bold text-center mt-4">Posts: {posts.length}</h2>
            <div className="grid md:grid-cols-3 gap-4 w-4/5 mx-auto mt-4">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;