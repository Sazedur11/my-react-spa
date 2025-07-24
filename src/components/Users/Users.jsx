import { useLoaderData } from "react-router-dom";
import User from "../USer/User";

const Users = () => {
  const users = useLoaderData();
  console.log(users)
  return (
    <div>
      <h2 className="text-center font-bold text-2xl">Total Users: {users.length}</h2>
      <div className="grid md:grid-cols-3 gap-4 w-4/5 mx-auto mt-6">
        {
          users.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
      <button className="border-2 border-amber-400 p-4 mt-10 rounded-xl bg-green-600 text-white font-bold btn mx-auto block">
        <a className="p-4" href="/">Go back to home page</a>
      </button>
    </div>
  );
};

export default Users;
