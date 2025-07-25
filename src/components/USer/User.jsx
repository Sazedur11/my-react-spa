

const User = ({user}) => {
    const {id, name, email, phone, website} = user;
    return (
        <div className="border-2 border-amber-400 p-4 rounded-2xl bg-lime-200 text-center">
            <h2 className="text-xl font-bold">Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><small>Website: {website}</small></p>
            <button  className="border-2 border-amber-400 p-4 mt-10 rounded-xl bg-lime-700 text-white font-bold btn mx-auto block"><a className="p-4" href={`/user/${id}`}>User Details</a></button>
        </div>
    );
};

export default User;