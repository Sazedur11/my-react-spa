

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-3xl text-center font-bold text-orange-500">Eplore here React router </h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;