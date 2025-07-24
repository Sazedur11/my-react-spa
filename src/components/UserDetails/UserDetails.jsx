import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {id, name, phone, website, email} = user;
    console.log(user)
    return (
        <div className="flex flex-col items-center justify-center mt-10 border-2 border-purple-400 bg-lime-200 p-4 rounded-xl md:w-3/6 mx-auto">
            <h2 className="text-2xl font-bold">User details here:</h2>
            <h2 className="text-xl font-semibold">Id: {id}</h2>
            <h2 className="text-xl font-bold">Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><small>Website: {website}</small></p>
            <button className="border-2 border-purple-400 p-4 mt-10 rounded-xl bg-lime-700 text-white font-bold btn mx-auto block"><a className="p-4" href="/users">Go back to Users page</a></button>
        </div>
    );
};

export default UserDetails;